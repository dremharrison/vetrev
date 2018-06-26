require('dotenv').config()
const mongoose = require('mongoose')
const Vet = require('../models/Vet')
const Pet = require('../models/Pet')
const Comment = require('../models/Comment')

// Connect to Database
mongoose.connect('mongodb://localhost/vetrev')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

// Remove old Homework Data
Vet.remove().then(() => {

  const comment1 = new Comment({
    subject: 'Go Here!',
    date: 09/01/2018,
    body: 'I agree! This place is great!',
    user: 'Adam Jimenez',
  })

  const pet1 = new Pet({
    name: 'Chewi',
    logourl: '',
    age: 3,
    breed: 'Siberian Husky',
    gender: 'M',
  })



  const vet1 = new Vet({
    name: "Banfield Pet Hospital",
    location: "650 Ponce De Leon Ave",
    hoursOfOperationOpen: 8,
    hoursOfOperationClose: 10,
    logourl: "http://www.sippycupmom.com/wp-content/uploads/2014/09/Banfield-Logo-for-light-backgrounds.png",
  })


  const vets = [vet1, vet2, vet3, vet4]
  const pets = [pet1, pet2, pet3, pet4]
  const comments = [comment1, comment2, comment3, comment4]

  // save test data
  return Vet.insertMany(vets)
})
  .then(() => {

    // close the database
    mongoose.connection.close()
  })