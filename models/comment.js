const mongoose = require('mongoose')
const commentSchema = require('../db/schemas/commentSchema')

const Comment = mongoose.model('player', commentSchema)

module.exports = Comment