const screenPackReservationsCollections = require ('../db').db().collection("screenReservations")

let ScreenPackReservation = function (scrdata) {
    this.scrdata = scrdata
}

ScreenPackReservation.prototype.sendScreenReservation = function() {
    
    // save screen package data to database
    screenPackReservationsCollections.insertOne(this.scrdata)
}

module.exports = ScreenPackReservation