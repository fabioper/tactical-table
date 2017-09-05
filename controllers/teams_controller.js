const Team = require('../models/team')

const index = (req, res) => {
    const { sort, fields, limit } = req.queries

    Team.find()
        .sort(sort)
        .select(fields)
        .limit(limit)
        .then(teams => res.json({ results: teams }))
        .catch(err => {
            console.log(err)
            res.status(400).send(err)
        })
}

module.exports = { index }
