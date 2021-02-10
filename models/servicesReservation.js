const servicesReservationsCollections = require ('../db').db().collection("serviceReservations")
const ObjectID = require('mongodb').ObjectID
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRIDAPIKEY)

let ServicesReservation = function(servdata) {
    this.servdata = servdata
}

ServicesReservation.prototype.sendServicesReservation = function() {

    // save services to database
    servicesReservationsCollections.insertOne(this.servdata)
}

// find service order
ServicesReservation.findServiceOrderById = function(id) {
    return new Promise(async function(resolve, reject) {
        if (typeof(id) !="string" || !ObjectID.isValid(id)) {
            reject()
            return
        }
        let servicesReservation = await servicesReservationsCollections.findOne({_id: new ObjectID(id)})
        if (servicesReservation) {
            resolve(servicesReservation)
        } else {
            reject()
        }
    })
}

// delete service order
ServicesReservation.delete = function(id) {
    return new Promise(async function(resolve, reject) {
        if (typeof(id) !="string" || !ObjectID.isValid(id)) {
            reject()
            return
        }
        let servicesReservation = await servicesReservationsCollections.deleteOne({_id: new ObjectID(id)})
        if (servicesReservation) {
            resolve(servicesReservation)
            sendgrid.send({
                to: 'mike.campbell1967@gmail.com',
                from: 'test@test.com',
                subject: `Presentation Services Reservation ${id} Cancelled`,
                text: `Presentation services order number ${id} has been cancelled by the customer.`,
                html: `Presentation services order number ${id} has been cancelled by the customer.`
            })
        } else {
            reject()
        }
    })
}

module.exports = ServicesReservation