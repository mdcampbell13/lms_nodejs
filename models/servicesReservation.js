const servicesReservationsCollections = require ('../db').db().collection("serviceReservations")

let ServicesReservation = function(servdata) {
    this.servdata = servdata
}

ServicesReservation.prototype.sendServicesReservation = function() {

    // save services to database
    servicesReservationsCollections.insertOne(this.servdata)
}

module.exports = ServicesReservation