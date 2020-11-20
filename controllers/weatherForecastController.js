const dotenv = require('dotenv')
dotenv.config()

const fetch = require("node-fetch")

let weatherZipInfo = {}

let sevenDayForecast = {}

    function zipCodeLocation(data2) {
    weatherZipInfo = data2
} 

function weatherForecast(data3) {
    sevenDayForecast = data3
}

function days() {
    let milliseconds
    let dateObject
    for(i=1; i<8; i++) {
    milliseconds = sevenDayForecast.daily[i].dt * 1000 
    dateObject = new Date(milliseconds)
    sevenDayForecast.daily[i].day = dateObject.toLocaleString("en-US", {weekday: "long"}) // Day
    }
}

function sunrise() {
    let milliseconds1
    let dateObject1
    for(i=0; i<8; i++) {
    milliseconds1 = sevenDayForecast.daily[i].sunrise * 1000 
    dateObject1 = new Date(milliseconds1)
    sevenDayForecast.daily[i].sunrise_time = dateObject1.toLocaleTimeString('en-US')
    }
}

function sunset() {
    let milliseconds2
    let dateObject2
    for(i=0; i<8; i++) {
    milliseconds2 = sevenDayForecast.daily[i].sunset * 1000 
    dateObject2 = new Date(milliseconds2)
    sevenDayForecast.daily[i].sunset_time = dateObject2.toLocaleTimeString('en-US')
    }
}

function currentSunrise() {
    let milliseconds3
    let dateObject3
    milliseconds3 = sevenDayForecast.current.sunrise * 1000 
    dateObject3 = new Date(milliseconds3)
    sevenDayForecast.current.sunrise_time = dateObject3.toLocaleTimeString('en-US')
    }

function currentSunset() {
    let milliseconds4
    let dateObject4
    milliseconds4 = sevenDayForecast.current.sunset * 1000 
    dateObject4 = new Date(milliseconds4)
    sevenDayForecast.current.sunset_time = dateObject4.toLocaleTimeString('en-US')
}


exports.viewWeatherForecastScreen = async function(req, res) {
         await fetch(`https://www.zipcodeapi.com/rest/${process.env.ZIPCODEAPIKEY}/info.json/${req.params.id}/degrees`)
        .then(res => res.json())
        .then(data2 => zipCodeLocation(data2))
        .catch(error => new Error(error))
        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherZipInfo.lat}&lon=${weatherZipInfo.lng}&units=imperial&exclude=minutely,hourly,alert&appid=${process.env.OPENWEATHERAPIKEY}`)
        .then(res => res.json())
        .then(data3 => weatherForecast(data3))
        .then (console.log(sevenDayForecast))
        .catch(error => new Error(error))
        days()
        sunrise()
        sunset()
        currentSunrise()
        currentSunset()
        res.render('weatherForecast', {sevenDayForecast, weatherZipInfo})
}