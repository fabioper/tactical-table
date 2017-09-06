const { expect } = require('chai')
const request = require('supertest')
const mongoose = require('mongoose')
const teams = require('../../seeds/teams_seed')
const app = require('../../../app')

describe('GET /teams/:id', () => {
    it('should return an individual team', done => {
        request(app)
            .get(`/teams/${teams[0]._id}`)
            .expect(200)
            .then(res => {
                expect(res.body.name).to.be.equals(teams[0].name)
                done()
            })
            .catch(done)
    })

    it('should return a 404 if team not found', done => {
        const id = new mongoose.Types.ObjectId()

        request(app)
            .get(`/teams/${id}`)
            .expect(404)
            .end(done)
    })

    it('should return 400 for invalid ids', done => {
        request(app)
            .get('/teams/123')
            .expect(400)
            .end(done)
    })

    it('should filter the result by passing fields query', done => {
        request(app)
            .get(`/teams/${teams[0]._id}?fields=name,-_id`)
            .expect(200)
            .then(res => {
                expect(res.body).to.have.all.keys('name')
                done()
            })
            .catch(done)
    })
})
