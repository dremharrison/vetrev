const express = require('express')
const router = express.Router({ mergeParams: true })
const Vet = require('../models/vet')
const Pet = require('../models/pet')



router.get('/', (req, res, next) => {
 
  Vet.findById(req.params.vetId).then((listOfVets) => {
      res.render('pet/index', { listOfVets})
    })
    .catch((err) => res.send(err))
})

// NEW Route
router.get('/new', (req, res) => {
  res.render('pet/new', {
    vetId: req.params.vetId
  })
})

// CREATE Route
router.post('/', (req, res) => {

  
  const pet = new Pet(req.body)

  
  Vet.findById(req.params.vetId)
    .then((showLeague) => {

    
      showVet.pets.push(pet)

    
      return showVet.save()
    })
    .then(() => {

    
      res.redirect(`/vet/${req.params.vetId}`)
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  Vet.findById(req.params.vetId)
    .then((vet) => {
      const showPet = vet.pets.id(req.params.id)
      res.render('pet/show', { showPet, vetId: req.params.vetId })
    })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  Vet.findById(req.params.vetId).remove
    .then((vet) => {
      const showPet = league.pets.id(req.params.id)
      res.render('pet/show', { showPet, vetId: req.params.vetId })
    })
})

module.exports = router