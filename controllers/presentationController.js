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
            text: `Thank you for your reservation, ${servicesReservation.servdata["First Name"]}!\nYour reservation for ${servicesReservation.servdata.serviceList} on ${servicesReservation.servdata["Reservation Date"]} has been submitted.\nYou will receive an email within 1-2 business days with payment options.\nYour order number is ${servicesReservation.servdata._id}`,
            html: `<strong>Thank you for your reservation, ${servicesReservation.servdata["First Name"]}!</strong><br>Your reservation for ${servicesReservation.servdata.serviceList} on ${servicesReservation.servdata["Reservation Date"]} has been submitted.<br>You will receive an email within 1-2 business days with payment options.<br>Your order number is ${servicesReservation.servdata._id}.`
        })
        jsonSrvRes = JSON.stringify(servicesReservation)
        sendgrid.send({
            to: 'mike.campbell1967@gmail.com',
            from: 'test@test.com',
            subject: 'Presentation Services Reservation Submitted',
            text: `Presentation Services Reservation for ${servicesReservation.servdata["Reservation Date"]}:\nOrder Number: ${servicesReservation.servdata._id}\n${servicesReservation.servdata["First Name"]} ${servicesReservation.servdata["Last Name"]}\n${servicesReservation.servdata.Email}\n${servicesReservation.servdata["Phone Number"]}\n${servicesReservation.servdata.Address} ${servicesReservation.servdata["Address 2"]}\n${servicesReservation.servdata.City}, ${servicesReservation.servdata.State} ${servicesReservation.servdata["Zip Code"]}\n${servicesReservation.servdata.serviceList}\n${servicesReservation.servdata["Additional Requests"]}`,
            html: `<strong>Presentation Services Reservation for ${servicesReservation.servdata["Reservation Date"]}:</strong><br>Order Number: ${servicesReservation.servdata._id}<br>${servicesReservation.servdata["First Name"]} ${servicesReservation.servdata["Last Name"]}<br>${servicesReservation.servdata.Email}<br>${servicesReservation.servdata["Phone Number"]}<br>${servicesReservation.servdata.Address} ${servicesReservation.servdata["Address 2"]}<br>${servicesReservation.servdata.City}, ${servicesReservation.servdata.State} ${servicesReservation.servdata["Zip Code"]}<br>${servicesReservation.servdata.serviceList}<br>${servicesReservation.servdata["Additional Requests"]}`
        })
        res.render("serveSuccess")
    } catch {
        res.render("serveFailure")
    }
}

exports.viewserviceOrderScreen = async function(req, res) {
    try {
        let servicesReservation = await ServicesReservation.findServiceOrderById(req.params.id)
        res.render('serviceOrder', {servicesReservation: servicesReservation})
    } catch {
        res.render('orderErrorScreen')
    }
}

exports.viewserviceOrderDeleteScreen = async function(req, res) {
    try {
        await ServicesReservation.delete(req.params.id)
        res.render('orderDeleteSuccessScreen')
    } catch {
        res.render('deleteFailureScreen')
    }
}