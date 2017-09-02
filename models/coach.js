const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoachSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 5
    },
    nickName: String,
    birthDate: Date,
    birthPlace: String,
    nationality: String,
    currentClub: {
        type: Schema.Types.ObjectId,
        ref: 'team'
    }
});

const Coach = mongoose.model('coach', CoachSchema);

module.exports = Coach;
