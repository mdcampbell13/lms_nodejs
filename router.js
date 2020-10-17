const express = require('express')
const router = express.Router()
const homeController = require('./controllers/homeController')
const presentationController = require('./controllers/presentationController')
const screenRentalsController = require('./controllers/screenRentalsController')
const packageAddOnsController = require('./controllers/packageAddOnsController')
const forecastController = require('./controllers/forecastController')
const movieRouletteController = require('./controllers/movieRouletteController')
const paSuccessController = require('./controllers/paSuccessController')
const paFailureController = require('./controllers/paFailureController')
const serveSuccessController = require('./controllers/serveSuccessController')
const serveFailureController = require('./controllers/serveFailureController')
const screenSuccessController = require('./controllers/screenSuccessController')
const screenFailureController = require('./controllers/screenFailureController')
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

// package reserve success route
router.get('/paSuccess', paSuccessController.viewpaSuccessScreen)

// package reserve success route
router.get('/forecast', forecastController.viewforecastScreen)

// movie roulette route
router.get('/movieRoulette', movieRouletteController.viewMovieRouletteScreen)

// package reserve fail route
router.get('/paFailure', paFailureController.viewpaFailureScreen)

// services reserve success route
router.get('/serveSuccess', serveSuccessController.viewServeSuccessScreen)

// services reserve fail route
router.get('/serveFailure', serveFailureController.viewServeFailureScreen)

// screen reserve success route
router.get('/screenSuccess', screenSuccessController.viewScreenSuccessScreen)

// screen reserve fail route
router.get('/screenFailure', screenFailureController.viewScreenFailureScreen)

// package fof (404) routes
router.get('/fof', fofController.viewfofScreen)

module.exports = router

