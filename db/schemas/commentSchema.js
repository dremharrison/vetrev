const Schema = require('mongoose').Schema
const petSchema = require('./petSchema')

const commentSchema = new Schema({
  subject: 'String',
  date: Date,
  body: 'String',
  user: 'String'
})

module.exports = commentSchema