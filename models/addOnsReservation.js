const addOnReservationsCollections = require ('../db').collection("addOnReservations")

let PAddOnsReservation = function (adata) {
    this.adata = adata
}

PAddOnsReservation.prototype.sendAddOnReservation = function() {

    // save package add on data to database
    addOnReservationsCollections.insertOne(this.adata)
}

module.exports = PAddOnsReservation