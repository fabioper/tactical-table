const router = require('express').Router()
const db = require('../config/db')

router.use('/teams', require('./teams'))

module.exports = router
