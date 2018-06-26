const Schema = require('mongoose').Schema
const commentSchema = require('./commentSchema')

const petSchema = new Schema({
  name: String,
  logourl: String,
  age: Number,
  breed: String,
  gender: String,
  comments:[commentSchema]
})

module.exports = petSchema