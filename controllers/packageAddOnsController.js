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
            text: `Thank you for your reservation, ${pAddOnsReservation.adata["First Name"]}!\nYour reservation for ${pAddOnsReservation.adata.addList} on ${pAddOnsReservation.adata["Reservation Date"]} has been received.\nYou will receive an email within 1-2 business days with payment options.\nYour order number is ${pAddOnsReservation.adata._id}.`,
            html: `<strong>Thank you for your reservation, ${pAddOnsReservation.adata["First Name"]}!</strong><br>Your reservation for ${pAddOnsReservation.adata.addList} on ${pAddOnsReservation.adata["Reservation Date"]} has been received.<br>You will receive an email within 1-2 business days with payment options.<br>Your order number is ${pAddOnsReservation.adata._id}.`
        })
        jsonAddPack = JSON.stringify(pAddOnsReservation)
        sendgrid.send({
            to: 'mike.campbell1967@gmail.com',
            from: 'test@test.com',
            subject: 'Screen Package Add-On Submitted',
            text: `Screen Package Add-On Reservation for ${pAddOnsReservation.adata["Reservation Date"]}:\nOrder Number: ${pAddOnsReservation.adata._id}\n${pAddOnsReservation.adata["First Name"]} ${pAddOnsReservation.adata["Last Name"]}\n${pAddOnsReservation.adata.Email}\n${pAddOnsReservation.adata["Phone Number"]}\n${pAddOnsReservation.adata.Address} ${pAddOnsReservation.adata["Address 2"]}\n${pAddOnsReservation.adata.City}, ${pAddOnsReservation.adata.State} ${pAddOnsReservation.adata["Zip Code"]}\n${pAddOnsReservation.adata.addList}\n${pAddOnsReservation.adata["Additional Requests"]}`,
            html: `<strong>Screen Package Add-On Reservation for ${pAddOnsReservation.adata["Reservation Date"]}:</strong><br>Order Number: ${pAddOnsReservation.adata._id}<br>${pAddOnsReservation.adata["First Name"]} ${pAddOnsReservation.adata["Last Name"]}<br>${pAddOnsReservation.adata.Email}<br>${pAddOnsReservation.adata["Phone Number"]}<br>${pAddOnsReservation.adata.Address} ${pAddOnsReservation.adata["Address 2"]}<br>${pAddOnsReservation.adata.City}, ${pAddOnsReservation.adata.State} ${pAddOnsReservation.adata["Zip Code"]}<br>${pAddOnsReservation.adata.addList}<br>${pAddOnsReservation.adata["Additional Requests"]}`
        })
        res.render('paSuccess')
        }  catch {
        res.render('paFailure')
    }
}

exports.viewaddOnsOrderScreen = function(req, res) {
    res.render('addOnsOrder')
}

exports.viewaddOnsOrderScreen = async function(req, res) {
    try {
        let addOnsReservation = await AddOnsReservation.findAddOnOrderById(req.params.id)
        res.render('addOnsOrder', {addOnsReservation: addOnsReservation})
    } catch {
        res.render('orderErrorScreen')
    }
}

exports.viewaddOnsOrderDeleteScreen = async function(req, res) {
    try {
        await AddOnsReservation.delete(req.params.id)
        res.render('orderDeleteSuccessScreen')
    } catch {
        res.render('deleteFailureScreen')
    }
}