const config = require('../config').get(process.env.NODE_ENV)
const mongoose = require('mongoose')
const router = require('express').Router()

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useMongoClient: true })

router.use('/teams', require('./teams'))

module.exports = router
