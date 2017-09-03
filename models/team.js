const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
    fullName: { type: String, required: true },
    shortName: String,
    initials: {
        type: String,
        maxlength: 3,
        required: true
    },
    foundation: Date,
    city: String,
    country: String,
    image: String,
    footStatsId: String
});

const Team = mongoose.model('team', TeamSchema);

module.exports = Team;
