const ScreenPackReservation = require('../models/screenPackReservation')

exports.viewScreenRentalsScreen = function(req, res) {
    res.render('screenRentals')
}

exports.sendScreenRentalReservation = function(req, res) {
    let screenPackReservation = new ScreenPackReservation(req.body)
    try {
        screenPackReservation.sendScreenReservation()
        res.render("screenSuccess")
    } catch {
        res.render("screenFailure")
    }
}