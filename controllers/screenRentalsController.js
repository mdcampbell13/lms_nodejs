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
            text: `Screen Package Reservation for ${screenPackReservation.scrdata["Reservation Date"]}:\nOrder Number: ${screenPackReservation.scrdata._id}\n${screenPackReservation.scrdata["First Name"]} ${screenPackReservation.scrdata["Last Name"]}\n${screenPackReservation.scrdata.Email}\n${screenPackReservation.scrdata["Phone Number"]}\n${screenPackReservation.scrdata.Address} ${screenPackReservation.scrdata["Address 2"]}\n${screenPackReservation.scrdata.City}, ${screenPackReservation.scrdata.State} ${screenPackReservation.scrdata["Zip Code"]}\n${screenPackReservation.scrdata["Screen Size Option"]}\n${screenPackReservation.scrdata["Additional Requests"]}`,
            html: `<strong>Screen Package Reservation for ${screenPackReservation.scrdata["Reservation Date"]}:</strong><br>Order Number: ${screenPackReservation.scrdata._id}<br>${screenPackReservation.scrdata["First Name"]} ${screenPackReservation.scrdata["Last Name"]}<br>${screenPackReservation.scrdata.Email}<br>${screenPackReservation.scrdata["Phone Number"]}<br>${screenPackReservation.scrdata.Address} ${screenPackReservation.scrdata["Address 2"]}<br>${screenPackReservation.scrdata.City}, ${screenPackReservation.scrdata.State} ${screenPackReservation.scrdata["Zip Code"]}<br>${screenPackReservation.scrdata["Screen Size Option"]}<br>${screenPackReservation.scrdata["Additional Requests"]}`
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