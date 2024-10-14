const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    members : {
        type : [Schema.Types.ObjectId],
        ref : 'User',
        required : true
    },
    mentorAlloted : {
        type : Schema.Types.ObjectId,
        ref : 'Mentor',
        required : true
    },
    githubRepo : {
        type : String,
        required : true
    },
    Status : {
        type : String,
        enum : ["Discussion" ,"Completed", "Pending", "Abandoned"],
        required : true
    },
    hostingLink : {
        type : String,
        default : null,
    },
    skills : {
        type : [Schema.Types.ObjectId],
        ref : 'Skill',
        required : true
    },
    features : {
        type : [String],
        required : true
    },
    thumbnail : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Project', projectSchema);