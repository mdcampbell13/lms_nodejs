const servicesReservationsCollections = require ('../db').db().collection("serviceReservations")
const ObjectID = require('mongodb').ObjectID

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

module.exports = ServicesReservation