const config = require('../config/vars').get(process.env.NODE_ENV)
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useMongoClient: true })
