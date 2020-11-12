const dotenv = require('dotenv')
dotenv.config()

const fetch = require("node-fetch")

let mPick = {}

function generateMovieList(data2) {
    mPick = data2[Math.floor(Math.random()*data2.length)];
}

exports.viewMovieRouletteScreen = async function(req, res) {
        await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDBAPIKEY}&with_genres=${req.params.id}`)
        .then(res => res.json())
        .then(data2 => generateMovieList(data2.results))
        .catch(error => new Error(error))
        res.render('movieRoulette', {mPick})
}