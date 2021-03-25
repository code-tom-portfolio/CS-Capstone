const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    /*userID: {
        type: Number,
        require: true
    },*/
    userEmail: {
        type: String,
        require: true
    },
    

}, { timestamps: true });

const user = mongoose.model('user', userSchema);
module.exports = user;