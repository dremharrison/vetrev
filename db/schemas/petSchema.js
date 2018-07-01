const Schema = require('mongoose').Schema
const commentSchema = require('./commentSchema')

const petSchema = new Schema({
  name: String,
  picurl: String,
  age: Number,
  breed: String,
  gender: String,
  review: String
})

module.exports = petSchema