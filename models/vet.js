const mongoose = require('mongoose')
const vetSchema = require('../db/schemas/vetSchema')

const Vet = mongoose.model('vet', vetSchema)

module.exports = Vet