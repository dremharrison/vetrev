require('dotenv').config()
const mongoose = require('mongoose')
const Vet = require('../models/vet')
const Pet = require('../models/pet')
const Comment = require('../models/comment')

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
    name: 'Buster',
    picurl: 'https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d',
    age: 2,
    breed: 'Lab',
    gender: 'M',
    review: "Very clean and amazing treats!",
    
  })

  const pet3 = new Pet({
    name: 'Fancy',
    picurl: 'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782',
    age: 1,
    breed: 'Lab',
    gender: 'F',
    review: "My mom like the doc. I didn't care for the needle!",
    
  })

  const pet4 = new Pet({
    name: 'Lover Boy',
    picurl: 'http://www.youthedesigner.com/wp-content/uploads/2011/04/5-Puppy-Love.jpg',
    age: 1,
    breed: 'Retriever',
    gender: 'M',
    review: "Amazing! They have treats!",
    
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
    pets:[pet1,pet4]
  })

  const vet2 = new Vet({
    name: "VCA Ansley Square",
    streetAddress: "1510 Piedmont Ave NE",
    cityStateZip:"Atlanta, GA 30324",
    phoneNumber: "(404) 875-7387",
    hoursOfOperationOpen: 12,
    hoursOfOperationClose: 12,
    logourl: "https://www.vca.com/wp-content/uploads/2016/07/logo-blue.png",
    website: "https://www.vcahospitals.com/",
    pets:[pet2,pet3]
  })

  const vet3 = new Vet({
    name: "Inman Park Animal Hospital",
    streetAddress: "926 DeKalb Ave NE",
    cityStateZip:"Atlanta, GA 30307",
    phoneNumber: "(404) 341-7400",
    hoursOfOperationOpen: 8,
    hoursOfOperationClose: 6,
    logourl: "https://www.royacdn.com/unsafe/smart/Site-7654bf6d-47da-47a5-9b0a-5c1d0f7b3435/Logos/Main_logo.png",
    website: "https://www.inmanparkanimalhospital.com/",
    pets:[pet1,pet4]
  })

  const vet4 = new Vet({
    name: "Ark Animal Hospital",
    streetAddress: "288 14th St NW",
    cityStateZip:"Atlanta, GA 30312",
    phoneNumber: "(404) 584-7478",
    hoursOfOperationOpen: 8,
    hoursOfOperationClose: 8,
    logourl: "http://www.thearkah.com/images/Ark_MainLOGO.jpg",
    website: "http://www.thearkah.com/",
    pets:[pet3,pet2]
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