const express = require('express')
const router = express.Router()
const homeController = require('./controllers/homeController')
const presentationController = require('./controllers/presentationController')
const screenRentalsController = require('./controllers/screenRentalsController')
const packageAddOnsController = require('./controllers/packageAddOnsController')
const fofController = require('./controllers/fofController')

// home routes
router.get('/', homeController.home)

// presentations routes
router.get('/presentationServices', presentationController.viewPresentationScreen)
router.post('/sendServicesReservation', presentationController.sendServicesReservation)

// screen rental routes
router.get('/screenRentals', screenRentalsController.viewScreenRentalsScreen)
router.post('/sendScreenRentalReservation', screenRentalsController.sendScreenRentalReservation)

// package add ons routes
router.get('/packageAddOns', packageAddOnsController.viewPackageAddOnsScreen)
router.post('/sendAddOnsReservation', packageAddOnsController.sendAddOnsReservation)

// package fof (404) routes
router.get('/fof', fofController.viewfofScreen)

module.exports = router

