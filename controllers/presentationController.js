const ServicesReservation = require('../models/servicesReservation')

exports.viewPresentationScreen = function(req, res) {
    res.render('presentationServices')
}

exports.sendServicesReservation = function(req, res) {
    let servicesReservation = new ServicesReservation(req.body)
    servicesReservation.sendServicesReservation()
    res.render("home")
}