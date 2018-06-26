const express = require('express')
const router = express.Router()
const Vet = require('../models/vet')


router.get('/', (req, res, next) => {

  Vet.find().then((listOfVets) => {
      console.log(listOfVets)
   
      res.render('vet/index', { listOfVets: listOfVets })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
  res.render('vet/new')
})

// CREATE Route
router.post('/', (req, res) => {
  console.log('inside post route')
  const createLeague = req.body
  console.log(createVet)
  Vet.create(createVet)
    .then(() => {
      res.redirect('/vet')
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  Vet.findById(req.params.id)
    .then((showVet) => {
      res.render('vet/show', { showVet })
    })
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
  Vet.findById(req.params.id)
    .then((editVet) => {
      res.render('vet/edit', { showVet: editVet })
    })
})

// UPDATE Route
router.put('/:id', (req, res) => {
  Vet.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/vet/${req.params.id}`)
  })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  Vet.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Delete ')
      res.redirect('/vet')
    })
})

module.exports = router