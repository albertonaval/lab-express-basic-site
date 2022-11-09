const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


require('./db/ddbb-connections')
app.use(express.static(path.join(__dirname, 'public')));

const Product = require('./models/products-model')


app.get('/', (req, res) => {
    //res.send('HOLIHOLI25')
    res.render('index-page')
})

app.get('/tienda', (req, res) => {
    //res.send('TIENDAHOLI')
    Product
        .find()
        .sort({ price: 0 })
        .select({ title: 1, price: 1, thumbnail: 1 })
        .then(allProductsFromDB => {
            res.render('shop-page', { product: allProductsFromDB })
        })
        .catch(err => console.log(err))

})

app.listen(5005, () => console.log('APP LISTENING'))