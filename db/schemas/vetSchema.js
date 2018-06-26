const Schema = require('mongoose').Schema
const petSchema = require('./petSchema')

const vetSchema = new Schema({
  name: String,
  location: String,
  hoursOfOperation:{
   open: Number,
   close: Number
  },
  logourl: String,
  pets:[petSchema]
})

module.exports = vetSchema