const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: String,
    country: String,
    image: String
})

const Team = mongoose.model('team', TeamSchema)

module.exports = Team
