const express = require('express')
const logger = require('morgan')
const config = require('./config').get(process.env.NODE_ENV)

const app = express()

app.use(logger('dev'))

app.use('/', require('./routes'))

app.listen(config.PORT, () => {
    console.log(`Express app listening on port ${config.PORT}`)
})
