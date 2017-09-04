const router = require('express').Router()
const teamsController = require('../controllers/teams_controller')

// Get all teams
router.get('/', teamsController.index)

module.exports = router
