const AddOnsReservation = require('../models/AddOnsReservation')
const PAddOnsReservation = require('../models/addOnsReservation')

exports.viewPackageAddOnsScreen = function(req, res) {
    res.render('packageAddOns')
}

exports.sendAddOnsReservation = function(req, res) {
    let pAddOnsReservation = new AddOnsReservation(req.body)
    pAddOnsReservation.sendAddOnReservation()
    res.send("This will send a package add on reservation")
}