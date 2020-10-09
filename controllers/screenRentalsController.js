const ScreenPackReservation = require('../models/screenPackReservation')
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRIDAPIKEY)

exports.viewScreenRentalsScreen = function(req, res) {
    res.render('screenRentals')
}

exports.sendScreenRentalReservation = function(req, res) {
    let screenPackReservation = new ScreenPackReservation(req.body)
    try {
        screenPackReservation.sendScreenReservation()
            sendgrid.send({
            to: screenPackReservation.scrdata.Email,
            from: 'test@test.com',
            subject: 'Thank you for your screen package reservation!',
            text: `Thank you for your reservation, ${screenPackReservation.scrdata["First Name"]}! You will receive an email within 1-2 business days with payment options.`,
            html: `<strong>Thank you for your reservation, ${screenPackReservation.scrdata["First Name"]}!</strong><br>You will receive an email within 1-2 business days with payment options.<br>Your order number is ${screenPackReservation.scrdata._id}.`
        })
        res.render("screenSuccess")
    } catch {
        res.render("screenFailure")
    }
}