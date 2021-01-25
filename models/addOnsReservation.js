const addOnReservationsCollections = require ('../db').db().collection("addOnReservations")
const ObjectID = require('mongodb').ObjectID

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
        } else {
            reject()
        }
    })
}

module.exports = PAddOnsReservation