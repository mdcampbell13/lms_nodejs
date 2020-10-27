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
            text: `Thank you for your reservation, ${screenPackReservation.scrdata["First Name"]}!\nYour reservation for a ${screenPackReservation.scrdata["Screen Size Option"]} on ${screenPackReservation.scrdata["Reservation Date"]} has been submitted\nYou will receive an email within 1-2 business days with payment options.\nYour order number is ${screenPackReservation.scrdata._id}.`,
            html: `<strong>Thank you for your reservation, ${screenPackReservation.scrdata["First Name"]}!</strong><br>Your reservation for a ${screenPackReservation.scrdata["Screen Size Option"]} on ${screenPackReservation.scrdata["Reservation Date"]} has been submitted<br>You will receive an email within 1-2 business days with payment options.<br>Your order number is ${screenPackReservation.scrdata._id}.`
        })
        jsonScrPack = JSON.stringify(screenPackReservation)
        sendgrid.send({
            to: 'mike.campbell1967@gmail.com',
            from: 'test@test.com',
            subject: 'Screen Package Reservation Submitted',
            text: `Screen Package Reservation for ${screenPackReservation.scrdata["Reservation Date"]}:\n${jsonScrPack}`,
            html: `<strong>Screen Package Reservation for ${screenPackReservation.scrdata["Reservation Date"]}:</strong><br>${jsonScrPack}`
        })
        res.render("screenSuccess")
    } catch {
        res.render("screenFailure")
    }
}

exports.viewscreenRentalOrderScreen = async function(req, res) {
    try {
        let screenPackReservation = await ScreenPackReservation.findScreenPackOrderById(req.params.id)
        res.render('screenRentalOrder', {screenPackReservation: screenPackReservation})
    } catch {
        res.render('orderErrorScreen')
    }
}