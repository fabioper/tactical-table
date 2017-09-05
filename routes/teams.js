const router = require('express').Router()
const queryParser = require('../helpers/queryParser')
const teamsController = require('../controllers/teams_controller')

router.get('/', queryParser, teamsController.index)

module.exports = router
