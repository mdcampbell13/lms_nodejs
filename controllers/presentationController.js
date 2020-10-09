const ServicesReservation = require('../models/servicesReservation')
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRIDAPIKEY)

exports.viewPresentationScreen = function(req, res) {
    res.render('presentationServices')
}

exports.sendServicesReservation = function(req, res) {
    let servicesReservation = new ServicesReservation(req.body)
    try {
        servicesReservation.sendServicesReservation()
        sendgrid.send({
            to: servicesReservation.servdata.Email,
            from: 'test@test.com',
            subject: 'Thank you for your presentation services reservation!',
            text: `Thank you for your reservation, ${servicesReservation.servdata["First Name"]}! You will receive an email within 1-2 business days with payment options.`,
            html: `<strong>Thank you for your reservation, ${servicesReservation.servdata["First Name"]}!</strong><br>You will receive an email within 1-2 business days with payment options.<br>Your order number is ${servicesReservation.servdata._id}.`
        })
        res.render("serveSuccess")
    } catch {
        res.render("serveFailure")
    }
}