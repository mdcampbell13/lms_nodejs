const flash = require('connect-flash')
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const app = express()
const router = require('./router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

let sessionOptions = session({
    secret: "JavaScript is sooooooooo coool",
    store: new MongoStore({client: require('./db')}),
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
  })

  app.use(sessionOptions)
  app.use(flash())

app.use(express.static( 'public' ) )
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)


app.use(function(req, res, next) {
    res.status(404);
    res.render('fof');
});

module.exports = app