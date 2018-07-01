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

  const comment2 = new Comment({
    subject: 'Go Here! 2',
    date: 09/01/2018,
    body: 'I agree! This place is great!',
    user: 'Adam Jimenez',
  })

  const comment3 = new Comment({
    subject: 'Go Here! 3',
    date: 09/01/2018,
    body: 'I agree! This place is great!',
    user: 'Adam Jimenez',
  })

  const comment4 = new Comment({
    subject: 'Go Here! 4',
    date: 09/01/2018,
    body: 'I agree! This place is great!',
    user: 'Adam Jimenez',
  })

  const pet1 = new Pet({
    name: 'Chewi',
    picurl: 'https://siberianhusky.com/wp-content/uploads/2016/09/puppyy11.jpg',
    age: 3,
    breed: 'Siberian Husky',
    gender: 'M',
    review: "Doc was nice! Maybe a little more lube on the anal gland express next time.",
    
  })

  const pet2 = new Pet({
    name: 'Chewi Jr',
    picurl: 'https://siberianhusky.com/wp-content/uploads/2016/09/puppyy11.jpg',
    age: 3,
    breed: 'Siberian Husky',
    gender: 'M',
    review: "Doc was nice! Maybe a little more lube on the anal gland express next time.",
    
  })

  const pet3 = new Pet({
    name: 'Chewi 3',
    picurl: 'https://siberianhusky.com/wp-content/uploads/2016/09/puppyy11.jpg',
    age: 3,
    breed: 'Siberian Husky',
    gender: 'M',
    review: "Doc was nice! Maybe a little more lube on the anal gland express next time.",
    
  })

  const pet4 = new Pet({
    name: 'Chewi 4',
    picurl: 'https://siberianhusky.com/wp-content/uploads/2016/09/puppyy11.jpg',
    age: 3,
    breed: 'Siberian Husky',
    gender: 'M',
    review: "Doc was nice! Maybe a little more lube on the anal gland express next time.",
    
  })

  const vet1 = new Vet({
    name: "Banfield Pet Hospital 1",
    streetAddress: "650 Ponce De Leon Ave",
    cityStateZip:"Atlanta, GA 30309",
    phoneNumber: "(404) 892-7277",
    hoursOfOperationOpen: 8,
    hoursOfOperationClose: 10,
    logourl: "http://www.sippycupmom.com/wp-content/uploads/2014/09/Banfield-Logo-for-light-backgrounds.png",
    website: "https://www.banfield.com/",
    pets:[pet1,pet2]
  })

  const vet2 = new Vet({
    name: "Banfield Pet Hospital 2",
    streetAddress: "650 Ponce De Leon Ave",
    cityStateZip:"Atlanta, GA 30309",
    phoneNumber: "(404) 892-7277",
    hoursOfOperationOpen: 8,
    hoursOfOperationClose: 10,
    logourl: "http://www.sippycupmom.com/wp-content/uploads/2014/09/Banfield-Logo-for-light-backgrounds.png",
    website: "https://www.banfield.com/",
    pets:[pet1,pet2]
  })

  const vet3 = new Vet({
    name: "Banfield Pet Hospital 3",
    streetAddress: "650 Ponce De Leon Ave",
    cityStateZip:"Atlanta, GA 30309",
    phoneNumber: "(404) 892-7277",
    hoursOfOperationOpen: 8,
    hoursOfOperationClose: 10,
    logourl: "http://www.sippycupmom.com/wp-content/uploads/2014/09/Banfield-Logo-for-light-backgrounds.png",
    website: "https://www.banfield.com/",
    pets:[pet1,pet2]
  })

  const vet4 = new Vet({
    name: "Banfield Pet Hospital 4",
    streetAddress: "650 Ponce De Leon Ave",
    cityStateZip:"Atlanta, GA 30309",
    phoneNumber: "(404) 892-7277",
    hoursOfOperationOpen: 8,
    hoursOfOperationClose: 10,
    logourl: "http://www.sippycupmom.com/wp-content/uploads/2014/09/Banfield-Logo-for-light-backgrounds.png",
    website: "https://www.banfield.com/",
    pets:[pet1,pet2]
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