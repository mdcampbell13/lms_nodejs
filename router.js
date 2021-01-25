const express = require('express')
const router = express.Router()
const homeController = require('./controllers/homeController')
const presentationController = require('./controllers/presentationController')
const screenRentalsController = require('./controllers/screenRentalsController')
const packageAddOnsController = require('./controllers/packageAddOnsController')
const movieRouletteController = require('./controllers/movieRouletteController')
const paSuccessController = require('./controllers/paSuccessController')
const paFailureController = require('./controllers/paFailureController')
const serveSuccessController = require('./controllers/serveSuccessController')
const serveFailureController = require('./controllers/serveFailureController')
const screenSuccessController = require('./controllers/screenSuccessController')
const screenFailureController = require('./controllers/screenFailureController')
const orderErrorController = require('./controllers/orderErrorController')
const weatherForecastController = require('./controllers/weatherForecastController')
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

// movie roulette route
router.get('/movieRoulette/:id', movieRouletteController.viewMovieRouletteScreen)

// weather forecast route
router.get('/weatherForecast/:id', weatherForecastController.viewWeatherForecastScreen)

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

// service order route
router.get('/serviceOrder/:id', presentationController.viewserviceOrderScreen)

// service order delete route
router.post('/serviceOrder/:id/delete', presentationController.viewserviceOrderDeleteScreen)

// screen order route
router.get('/screenRentalOrder/:id', screenRentalsController.viewscreenRentalOrderScreen)

//screen order delete route
router.post('/screenRentalOrder/:id/delete', screenRentalsController.viewscreenRentalOrderDeleteScreen)

// screen add on order route
router.get('/addOnsOrder/:id', packageAddOnsController.viewaddOnsOrderScreen)

//screen add on order delete route
router.post('/addOnsOrder/:id/delete', packageAddOnsController.viewaddOnsOrderDeleteScreen)

// order fail route
router.get('/orderErrorScreen', orderErrorController.vieworderErrorScreen)

// package fof (404) routes
router.get('/fof', fofController.viewfofScreen)

module.exports = router

