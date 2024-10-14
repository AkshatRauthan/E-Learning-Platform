const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const batchSchema = new Schema({
    title : {
        type :  String,
        required : true,
    },
    description : {
        type : String,
        required : true
    },
    startingFrom : {
        type : Date
    },
    duration : {
        type : String
    },
    skills : {
        type : [String],
        required : true
    },
    features : {
        type : [String],
        required : true
    },
    mentors : {
        type : [String],
    },
    image : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Batch', batchSchema);