const { expect } = require('chai')
const mongoose = require('mongoose')
const request = require('supertest')
const Team = require('../../../models/team')
const app = require('../../../app')

describe('POST /teams', () => {
    it('should post a new team and redirects to its document', done => {
        const team = {
            _id: new mongoose.Types.ObjectId(),
            name: 'Club Atlético Boca Juniors',
            city: 'Buenos Aires',
            country: 'Argentina',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Boca_Juniors_2012.svg/120px-Boca_Juniors_2012.svg.png'
        }

        request(app)
            .post('/teams')
            .send(team)
            .expect(302)
            .expect('Location', `/teams/${team._id}`)
            .then(() => Team.findOne({ name: 'Club Atlético Boca Juniors' }))
            .then(team => {
                expect(team).to.exist
                done()
            })
            .catch(done)
    })

    it('should not create team with invalid body data', done => {
        request(app)
            .post('/teams')
            .send({})
            .expect(400)
            .then(() => Team.find())
            .then(teams => {
                expect(teams).to.have.lengthOf(4)
                done()
            })
            .catch(done)
    })
})
