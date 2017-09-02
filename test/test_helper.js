const mongoose = require('mongoose');

beforeEach(done => {
    const { teams, players } = mongoose.connection.collections;

    Promise.all(teams.drop(), players.drop())
        .then(() => done())
        .catch(() => done());
});
