const mongoose = require('mongoose');
const schema = mongoose.Schema;

const teamSchema = new mongoose.Schema({
    /*teamID: {
        type: Number,
        require: true
    },
    teamName: {
        type: String,
        require: true
    },
    player: {
        type: String,
        require: true
    }*/
    QB: {
        type: String,
        require: true
    },
    RB1: {
        type: String,
        require: true
    },
    RB2: {
        type: String,
        require: true
    },
    WR1: {
        type: String,
        require: true
    },
    WR2: {
        type: String,
        require: true
    },
    TE: {
        type: String,
        require: true
    },
    FLEX: {
        type: String,
        require: true
    },
    DEFENSE: {
        type: String,
        require: true
    },
    K: {
        type: String,
        require: true
    },
    BENCH1: {
        type: String,
        require: true
    },
    BENCH2: {
        type: String,
        require: true
    },
    BENCH3: {
        type: String,
        require: true
    },
    BENCH4: {
        type: String,
        require: true
    },
    BENCH5: {
        type: String,
        require: true
    },
    BENCH6: {
        type: String,
        require: true
    },
    BENCH7: {
        type: String,
        require: true
    },
    LEAGUE: {
        type: String,
        require: true
    },
    userEmail:{
        type: String,
        require: true
    },


}, { timestamps: true });

const team = mongoose.model('team', teamSchema);
module.exports = team;

