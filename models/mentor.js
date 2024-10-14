const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    domain : {
        type : [Schema.Types.ObjectId],
        ref : 'Skill',
        required : true
    },
    experience : {
        type : [String],
        required : true
    }
});

module.exports = mongoose.model(`Mentor`, mentorSchema);