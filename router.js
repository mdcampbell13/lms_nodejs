const express = require('express')
const router = express.Router()
const homeController = require('./controllers/homeController')
const presentationController = require('./controllers/presentationController')
const screenRentalsController = require('./controllers/screenRentalsController')
const packageAddOnsController = require('./controllers/packageAddOnsController')
const fofController = require('./controllers/fofController')

router.get('/', homeController.home)
router.post('/', homeController.home)


// presentations routes
router.get('/presentationServices', presentationController.viewPresentationScreen)
router.post('/sendServiceForm', presentationController.sendServiceForm)

// screen rental routes
router.get('/screenRentals', screenRentalsController.viewScreenRentalsScreen)
router.post('/sendScreenForm', screenRentalsController.sendScreenForm)

// package add ons routes
router.get('/packageAddOns', packageAddOnsController.viewPackageAddOnsScreen)
router.post('/sendPackAddForm', packageAddOnsController.sendPackAddForm)

// package fof (404) routes
router.get('/fof', fofController.viewfofScreen)

module.exports = router

