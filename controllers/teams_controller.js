const Team = require('../models/team')

module.exports = {
    index(req, res) {
        const { sort, fields, limit, skip } = req.queries

        Team.find()
            .sort(sort)
            .select(fields)
            .limit(limit)
            .skip(skip)
            .then(teams => res.json({ results: teams }))
            .catch(err => {
                console.log(err)
                res.status(400).send(err)
            })
    },

    create(req, res) {
        Team.create(req.body)
            .then(team => res.redirect(`/teams/${team._id}`))
            .catch(err => res.status(400).send(err))
    },

    show(req, res) {
        const _id = req.params.id
        const { fields } = req.queries

        Team.findById(_id)
            .select(fields)
            .then(team => {
                if (!team) {
                    return res.status(404)
                        .send('No team with this ID was found')
                }
                res.json(team)
            })
            .catch(err => res.status(400).send(err))
    }
}
