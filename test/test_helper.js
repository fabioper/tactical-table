const Team = require('../models/team')
const db = require('../db')

beforeEach(done => {
    Promise.all([Team.collection.drop()])
        .then(() => done())
        .catch(err => done(err))
})

describe('GET /teams', () => {
    it('should pass', done => {
        console.log('hheeey')
        done()
    })
})
