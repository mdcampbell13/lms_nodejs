const addOnReservationsCollections = require ('../db').db().collection("addOnReservations")
const ObjectID = require('mongodb').ObjectID
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRIDAPIKEY)

let PAddOnsReservation = function (adata) {
    this.adata = adata
}

PAddOnsReservation.prototype.sendAddOnReservation = function() {

    // save package add on data to database
    addOnReservationsCollections.insertOne(this.adata)
}


// find screen pack reservation
PAddOnsReservation.findAddOnOrderById = function(id) {
    return new Promise(async function(resolve, reject) {
        if (typeof(id) !="string" || !ObjectID.isValid(id)) {
            reject()
            return
        }
        let pAddOnsReservation = await addOnReservationsCollections.findOne({_id: new ObjectID(id)})
        if (pAddOnsReservation) {
            resolve(pAddOnsReservation)
        } else {
            reject()
        }
    })
}

// delete service order
PAddOnsReservation.delete = function(id) {
    return new Promise(async function(resolve, reject) {
        if (typeof(id) !="string" || !ObjectID.isValid(id)) {
            reject()
            return
        }
        let pAddOnsReservation = await addOnReservationsCollections.deleteOne({_id: new ObjectID(id)})
        if (pAddOnsReservation) {
            resolve(pAddOnsReservation)
            sendgrid.send({
                to: 'mike.campbell1967@gmail.com',
                from: 'test@test.com',
                subject: `Package Add-on Services Reservation ${id} Cancelled`,
                text: `Package add-on services order number ${id} has been cancelled by the customer.`,
                html: `Package add-on services order number ${id} has been cancelled by the customer.`
            })
        } else {
            reject()
        }
    })
}

module.exports = PAddOnsReservation