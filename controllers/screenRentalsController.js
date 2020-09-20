exports.viewScreenRentalsScreen = function(req, res) {
    res.render('screenRentals')
}

exports.sendScreenForm = function() {
    console.log(req.body)
    res.send("Thanks for trying to make a reservation!")
}