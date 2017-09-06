const { expect } = require('chai')
const request = require('supertest')
const Team = require('../../models/team')
const app = require('../../app')

describe('POST /teams', () => {
    it('should post a new team', done => {
        request(app)
            .post('/teams')
            .send({
                name: 'Club Atlético Boca Juniors',
                city: 'Buenos Aires',
                country: 'Argentina',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Boca_Juniors_2012.svg/120px-Boca_Juniors_2012.svg.png'
            })
            .expect(302)
            .then(() => Team.findOne({ name: 'Club Atlético Boca Juniors' }))
            .then(team => {
                expect(team).to.exist
                done()
            })
            .catch(done)
    })
})
