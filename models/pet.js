const mongoose = require('mongoose')
const petSchema = require('../db/schemas/petSchema')

const Pet = mongoose.model('pet', petSchema)

module.exports = Pet
