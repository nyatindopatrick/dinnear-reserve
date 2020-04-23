require('dotenv').config()
const config = require('../config/index')
const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connection.on('connected', () => {
  console.log('Connection Established')
})

mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished')
})

mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected')
})

mongoose.connection.on('close', () => {
  console.log('Connection Closed')
})

mongoose.connection.on('error', (error) => {
  console.log('ERROR: ' + error)
})
  console.log(config.MONGO_URI)
databaseConnection = async () => {
  await mongoose.connect('mongodb+srv://cyrus254:@Ashphalt254@cluster0-lu0o4.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports.databaseConnection = databaseConnection
