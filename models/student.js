const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    qualification : {
        title : {
            type : String
        },
        domain : {
            type : String
        },
        institution : {
            type : String
        },
        status : {
            type : String
        }
    },
    batches : {
        type : [Schema.Types.ObjectId]
    },
    rating : {
        type : Number,
        def: 800
    }
});