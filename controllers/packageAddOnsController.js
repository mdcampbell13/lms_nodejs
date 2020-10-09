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
            html: `<strong>Thank you for your reservation, ${pAddOnsReservation.adata["First Name"]}!</strong><br>You will receive an email within 1-2 business days with payment options.<br>Your order number is ${pAddOnsReservation.adata._id}.`
        })
        res.render('paSuccess')
        }  catch {
        res.render('paFailure')
    }
}