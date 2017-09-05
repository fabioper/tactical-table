const Team = require('../models/team')

const index = (req, res) => {
    Team.find()
        .then(teams => res.json({ results: teams }))
        .catch(err => res.status(400).send(err))
}

module.exports = { index }
