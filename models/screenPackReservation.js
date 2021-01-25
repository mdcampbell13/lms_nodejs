const screenPackReservationsCollections = require ('../db').db().collection("screenReservations")
const ObjectID = require('mongodb').ObjectID

let ScreenPackReservation = function (scrdata) {
    this.scrdata = scrdata
}

ScreenPackReservation.prototype.sendScreenReservation = function() {
    
    // save screen package data to database
    screenPackReservationsCollections.insertOne(this.scrdata)
}


// find screen pack reservation
ScreenPackReservation.findScreenPackOrderById = function(id) {
    return new Promise(async function(resolve, reject) {
        if (typeof(id) !="string" || !ObjectID.isValid(id)) {
            reject()
            return
        }
        let screenPackReservation = await screenPackReservationsCollections.findOne({_id: new ObjectID(id)})
        if (screenPackReservation) {
            resolve(screenPackReservation)
        } else {
            reject()
        }
    })
}

// delete screen pack order
ScreenPackReservation.delete = function(id) {
    return new Promise(async function(resolve, reject) {
        if (typeof(id) !="string" || !ObjectID.isValid(id)) {
            reject()
            return
        }
        let screenPackReservation = await screenPackReservationsCollections.deleteOne({_id: new ObjectID(id)})
        if (screenPackReservation) {
            resolve(screenPackReservation)
        } else {
            reject()
        }
    })
}

module.exports = ScreenPackReservation