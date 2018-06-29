const express = require('express')
const router = express.Router()
const Vet = require('../models/vet')


router.get('/', (req, res, next) => {

  Vet.find().then((listOfVets) => {
    res.send(listOfVets)
  })
    .catch((err) => res.send(err))

})

// NEW Route
// router.get('/new', (req, res) => {
//   res.send('vet/new')
// })

// CREATE Route
router.post('/', (req, res) => {
  console.log('inside post route')
  const createVet = req.body
  Vet.create(createVet)
    .then(() => {
      res.send(createVet)
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  Vet.findById(req.params.id)
    .then((showVet) => {
      res.send(showVet)
    })
})

// EDIT Route
// router.get('/:id/edit', (req, res) => {
//   Vet.findById(req.params.id)
//     .then((editVet) => {
//       res.send(editVet)
//     })
// })

// UPDATE Route
router.put('/:id', async (req, res) => {
  const vet = await Vet.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.send({
    vet
  })
})

// router.put('/:id', async (req, res) => {
//   const vetId = req.params.id
//   const updatedVet = req.body
//   const savedVet = await Vet.findByIdAndUpdate(vetId, updatedVet)
//   res.send({savedVet})

// })

// DELETE Route
router.delete('/:id', async (req, res) => {
  const vet= await Vet.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Delete ')
      res.send({vet})
    })
})

module.exports = router