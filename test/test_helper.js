const mongoose = require('mongoose')

beforeEach(done => {
    const { teams } = mongoose.connection.collections

    Promise.all([teams.drop()])
        .then(() => done())
        .catch(() => done())
})
