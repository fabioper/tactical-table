const { expect } = require('chai')
const request = require('supertest')
const app = require('../../app')

describe('GET /teams', () => {
    it('should return all teams', done => {
        request(app)
            .get('/teams')
            .expect(200)
            .then(res => {
                expect(res.body.results).to.have.lengthOf(4)
                done()
            })
            .catch(done)
    })

    it('should sort results when receiving sortBy query', done => {
        request(app)
            .get('/teams?sortBy=city')
            .expect(200)
            .then(res => {
                expect(res.body.results[0].city).to.be.equals('Belo Horizonte, MG')
                done()
            })
            .catch(done)
    })

    it('should filter the results when receiving filterBy query', done => {
        request(app)
            .get('/teams?filterBy=city,country')
            .expect(200)
            .then(res => {
                const firstResult = res.body.results[0]
                expect(firstResult).to.have.all.keys('city', 'country', '_id')
                done()
            })
            .catch(done)
    })

    it('should limit results when receiving limit query', done => {
        request(app)
            .get('/teams?limit=2')
            .expect(200)
            .then(res => {
                expect(res.body.results).to.have.lengthOf(2)
                done()
            })
            .catch(done)
    })

    it('should limit, filter and sort when receiving limit, filterBy and sortBy queries', done => {
        request(app)
            .get('/teams?sortBy=-name&limit=1&filterBy=name,city,-_id')
            .expect(200)
            .then(res => {
                expect(res.body.results[0]).to.have.all.keys('name', 'city')
                expect(res.body.results[0].name).to.be.equals('Sport Club Internacional')
                done()
            })
            .catch(done)
    })
})
