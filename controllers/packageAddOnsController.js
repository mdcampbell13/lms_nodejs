const AddOnsReservation = require('../models/addOnsReservation')

exports.viewPackageAddOnsScreen = function(req, res) {
    res.render('packageAddOns')
}    

exports.sendAddOnsReservation = function(req, res) {
        let pAddOnsReservation = new AddOnsReservation(req.body)
        try {
        pAddOnsReservation.sendAddOnReservation()
        res.render('paSuccess')
        }  catch {
        res.render('paFailure')
    }
}