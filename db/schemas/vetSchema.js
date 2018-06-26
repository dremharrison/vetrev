const Schema = require('mongoose').Schema
const petSchema = require('./petSchema')

const vetSchema = new Schema({
  name: String,
  location: String,
  hoursOfOperationOpen: Number,
  hoursOfOperationClose: Number,
  logourl: String,
  pets:[petSchema]
})

module.exports = vetSchema