const dotenv = require('dotenv')
dotenv.config()

const fetch = require("node-fetch")

let weatherZipInfo = {}

let sevenDayForecast = {}

/* function zipCodeLocation(data2) {
    weatherZipInfo = data2
} */

function weatherForecast(data3) {
    sevenDayForecast = data3
}

function days() {
    let milliseconds
    let dateObject
    for(i=1; i<7; i++) {
milliseconds = sevenDayForecast.daily[i].dt * 1000 
dateObject = new Date(milliseconds)
sevenDayForecast.daily[i].day = dateObject.toLocaleString("en-US", {weekday: "long"}) // Day
}

}

fForecast = async function() {
    await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherZipInfo.lat}&lon=${weatherZipInfo.lng}&exclude=minutely,hourly,alert&appid=${process.env.OPENWEATHERAPIKEY}`)
    .then(res => res.json())
    .then(data3 => weatherForecast(data3))
    .then (console.log(sevenDayForecast))
    .catch(error => new Error(error))

}

exports.viewWeatherForecastScreen = async function(req, res) {
       /*  await fetch(`https://www.zipcodeapi.com/rest/${process.env.ZIPCODEAPIKEY}/info.json/${req.params.id}/degrees`)
        .then(res => res.json())
        .then(data2 => zipCodeLocation(data2))
        .catch(error => new Error(error)) */
        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherZipInfo.lat}&lon=${weatherZipInfo.lng}&exclude=minutely,hourly,alert&appid=${process.env.OPENWEATHERAPIKEY}`)
        .then(res => res.json())
        .then(data3 => weatherForecast(data3))
        .then (console.log(sevenDayForecast))
        .catch(error => new Error(error))
        fForecast()
        days()
        res.render('weatherForecast', {sevenDayForecast, weatherZipInfo})
}