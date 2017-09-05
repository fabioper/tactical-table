const router = require('express').Router()
const db = require('../db')

router.use('/teams', require('./teams'))

module.exports = router
