const Team = require('../models/team')

const index = (req, res, next) => {
    Team.find()
        .then(results => res.json(results))
        .catch(next)
}

module.exports = { index }
