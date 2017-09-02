const config = require('../config').get(process.env.NODE_ENV);
const router = require('express').Router();

router.use('/teams', require('./teams'));

module.exports = router;
