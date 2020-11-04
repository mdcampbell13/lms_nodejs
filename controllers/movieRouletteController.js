const dotenv = require('dotenv')
dotenv.config()

const fetch = require("node-fetch")

const MovieAPIKey = process.env.MOVIEDBAPIKEY

let moviePick = {}

fetchMovie = function(req, res) {
    let movegen = req.params.id
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${MovieAPIKey}&with_genres=${movegen}`)
    .then(response => response.json())
    .then(data2 => generateMovieList(data2.results))
    .catch(error => new Error(error))
}

generateMovieList = function (data2) {
    moviePick = data2[Math.floor(Math.random()*data2.length)];
}


exports.viewMovieRouletteScreen = function(req, res) {
    res.render('movieRoulette', moviePick)
}