exports.viewPresentationScreen = function(req, res) {
    res.render('presentationServices')
}


exports.sendServiceForm = function() {
    console.log(req.body)
    res.send("Thanks for trying to make a reservation!")
}
