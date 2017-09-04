const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeamSchema = new Schema({
    fullName: { type: String, required: true },
    shortName: String,
    abbreviation: {
        type: String,
        maxlength: 4,
        required: true
    },
    foundation: Date,
    city: String,
    country: String,
    image: String
})

const Team = mongoose.model('team', TeamSchema)

module.exports = Team
