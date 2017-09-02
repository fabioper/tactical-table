const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 5
    },
    nickName: String,
    birthDate: Date,
    birthPlace: String,
    nationality: String,
    position: String,
    currentClub: {
        type: Schema.Types.ObjectId,
        ref: 'team'
    },
    footStatsId: String
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;
