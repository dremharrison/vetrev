const express = require('express')
const router = express.Router({ mergeParams: true })
const Vet = require('../models/vet')
const Pet = require('../models/pet')
const Comment = require('../models/comment')


router.get('/', (req, res, next) => {

  Vet.findById(req.params.vetId)
    .then((vet) => {
      console.log('it works')
      res.render('pet/index', 
      {
        vet,
        pets: vet.pets
      })
      console.log('it def works')
    })
})

// NEW Route
router.get('/new', (req, res) => {
  res.render('comment/new', {
    vetId: req.params.vetId
  })
})

// CREATE Route
router.post('/', (req, res) => {


  const pet = new Pet(req.body)

  
  Vet.findById(req.params.vetId)
    .then((showVet) => {

    
      showVet.pets.push(pet)

  
      return showVet.save()
    })
    .then(() => {

   
      res.redirect(`/Vet/${req.params.vetId}/pet`)
    })
})


router.delete('/:id', (req, res) => {

})

module.exports = router