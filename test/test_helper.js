const Team = require('../models/team')
const teams = require('./seeds/teams')
const db = require('../db')

beforeEach(done => {
    Promise.all([Team.collection.drop()])
        .then(() => Team.insertMany(teams))
        .then(() => done())
        .catch(err => done(err))
})
