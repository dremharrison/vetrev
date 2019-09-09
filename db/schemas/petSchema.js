const Schema = require('mongoose').Schema
const commentSchema = require('./commentSchema')

const petSchema = new Schema({
  name: String,
  picurl: String,
  age: String,
  breed: String,
  gender: String,
  review: String,
  rating: String
})

module.exports = petSchema