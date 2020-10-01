exports.viewPackageAddOnsScreen = function(req, res) {
    res.render('packageAddOns')
}

exports.sendAddOnsReservation = function(req, res) {
    res.send("This will send a package add on reservation")
}