const { expect } = require('chai')
const request = require('supertest')
const app = require('../../../app')

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

    it('should sort results with sort query', done => {
        request(app)
            .get('/teams?sort=city')
            .expect(200)
            .then(res => {
                expect(res.body.results[0].city).to.be.equals('Belo Horizonte, MG')
                done()
            })
            .catch(done)
    })

    it('should filter the results fields with fields query', done => {
        request(app)
            .get('/teams?fields=city,country')
            .expect(200)
            .then(res => {
                const firstResult = res.body.results[0]
                expect(firstResult).to.have.all.keys('city', 'country', '_id')
                done()
            })
            .catch(done)
    })

    it('should limit results with limit query', done => {
        request(app)
            .get('/teams?limit=2')
            .expect(200)
            .then(res => {
                expect(res.body.results).to.have.lengthOf(2)
                done()
            })
            .catch(done)
    })

    it('should skip results with skip query', done => {
        request(app)
            .get('/teams?sort=city&skip=2')
            .expect(200)
            .then(res => {
                expect(res.body.results).to.have.lengthOf(2)
                expect(res.body.results[0].city).to.be.equals('Rio de Janeiro, RJ')
                done()
            })
            .catch(done)
    })

    it('should be possible to use sort, fields, skip and limit together', done => {
        request(app)
            .get('/teams?limit=1&sort=-name&skip=1&fields=name,city,-_id')
            .expect(200)
            .then(res => {
                expect(res.body.results).to.have.lengthOf(1)
                expect(res.body.results[0].name).to.be.equals('Sociedade Esportiva Palmeiras')
                expect(res.body.results[0]).to.have.all.keys('name', 'city')
                done()
            })
            .catch(done)
    })
})
