const express = require('express')
const app = express()
const router = require('./router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static( 'public' ) )
app.set('views', 'views')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render ("home")
})

app.use('/', router)

app.use(function(req, res, next) {
    res.status(404);
    res.render('fof');
});


app.listen(3000)