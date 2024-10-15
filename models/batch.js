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
    startDate : {
        type : Date
    },
    duration : {
        type : String
    },
    skill : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'Skill'
    },
    features : {
        type : [String],
        required : true
    },
    mentor : {
        type : Schema.Types.ObjectId,
        ref : 'Mentor',
        required: true
    },
    images : {
        type : [String],
        required : true
    }
});

module.exports = mongoose.model('Batch', batchSchema);