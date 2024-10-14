const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const url = `https://res.cloudinary.com/dqtaaxgby/image/upload/v1728788732/user_xpcbhx.png`
const userSchema = new Schema({
    email : {
        type : String,
        required : true,
    },
    phoneNo : {
        type : Number,
        min : 1000000000,
        max : 9999999999,
        required : true
    },
    dateOfBirth : {
        type : Date,
        required : true
    },
    profile : {
        type : String,
        default: url
    },
    address : {
        type : String
    }
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model(`User`, userSchema);