const mongodb = require('mongodb')

const connectionString = 'mongodb+srv://LMS_customer:customer@cluster0.mw6j0.mongodb.net/LMS?retryWrites=true&w=majority'

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    module.exports = client.db()
    const app = require('./app')
    app.listen(3000)
})