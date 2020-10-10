const AddOnsReservation = require('../models/addOnsReservation')
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRIDAPIKEY)

exports.viewPackageAddOnsScreen = function(req, res) {
    res.render('packageAddOns')
}    

exports.sendAddOnsReservation = function(req, res) {
        let pAddOnsReservation = new AddOnsReservation(req.body)
        try {
        pAddOnsReservation.sendAddOnReservation()
        sendgrid.send({
            to: pAddOnsReservation.adata.Email,
            from: 'test@test.com',
            subject: 'Thank you for your screen package addon reservation!',
            text: `Thank you for your reservation, ${pAddOnsReservation.adata["First Name"]}! You will receive an email within 1-2 business days with payment options.`,
            html: `<strong>Thank you for your reservation, ${pAddOnsReservation.adata["First Name"]}!</strong><br>Your reservation is set for ${pAddOnsReservation.adata["Reservation Date"]}.<br>You will receive an email within 1-2 business days with payment options.<br>Your order number is ${pAddOnsReservation.adata._id}.`
        })
        jsonAddPack = JSON.stringify(pAddOnsReservation.adata)
        sendgrid.send({
            to: 'mike.campbell1967@gmail.com',
            from: 'test@test.com',
            subject: 'Screen Package Add-On Submitted',
            text: `Screen Package Add-On Reservation Submitted: ${jsonAddPack}`,
            html: `<strong>Screen Package Add-On Reservation for ${pAddOnsReservation.adata["Reservation Date"]}:</strong><br>${jsonAddPack}`
        })
        res.render('paSuccess')
        }  catch {
        res.render('paFailure')
    }
}