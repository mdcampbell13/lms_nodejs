exports.viewPackageAddOnsScreen = function(req, res) {
    res.render('packageAddOns')
}

exports.sendPackAddForm = function() {
    console.log(req.body)
    res.send("Thanks for trying to make a reservation!")
}