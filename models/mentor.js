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
    },
    geometry: {
        type : {
            type : String,
            enum : [`Point`],
            required : true
        },
        coordinates : {
            type : [Number],
            required : true
        }
    },
    rating : {
        type: Number,
        max : 10,
        min : 0
    }
});

module.exports = mongoose.model(`Mentor`, mentorSchema);