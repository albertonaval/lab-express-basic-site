const mongoose = require('mongoose')

const dataBaseName = 'ironshop'
const connectionString = `mongodb://localhost/${dataBaseName}`

mongoose
    .connect(connectionString)
    .then(connectionInfo => console.log(`Connected to Mongo!, "${connectionInfo.connections[0].name}"`))
    .catch(err => console.error('Error connecting to Mongo', err))


