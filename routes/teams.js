const router = require('express').Router()
const bodyParser = require('body-parser')
const queryParser = require('../helpers/queryParser')
const teamsController = require('../controllers/teams_controller')

const jsonParser = bodyParser.json()

router.get('/', queryParser, teamsController.index)
router.post('/', jsonParser, teamsController.create)

module.exports = router
