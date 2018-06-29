const Schema = require('mongoose').Schema
const petSchema = require('./petSchema')

const vetSchema = new Schema({
  name: String,
  streetAddress: String,
  cityStateZip: String,
  phoneNumber: String,
  hoursOfOperationOpen: Number,
  hoursOfOperationClose: Number,
  logourl: String,
  website: String,
  pets:[petSchema]
})

module.exports = vetSchema