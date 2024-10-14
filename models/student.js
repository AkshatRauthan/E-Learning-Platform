const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
    }
});