const config = require('./config').get(process.env.NODE_ENV)
const express = require('express')
const logger = require('morgan')

const app = express()

if (process.env.NODE_ENV !== 'test') {
    app.use(logger('dev'))
}

app.use('/', require('./routes'))

// generic error handler
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500)
    res.json({
        error: err,
        status: res.statusCode
    })
})

app.listen(config.port, () => {
    console.log(`Express app listening on port ${config.port}`)
})

module.exports = app
