const mongoose = require(`mongoose`);
const User = require('../models/user.js');
const Batch = require('../models/batch.js');
const Mentor = require('../models/mentor.js');
const Project = require('../models/project.js');
const Skill = require('../models/skill.js');
let {batchData, skillData, userData, mentorData} = require("./data.js");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wand-of-skills');
}

main().then(() => console.log(`Connection Successfull`))
.catch((error) => console.log(error));

async function initializeSkills(){
    await Skill.deleteMany({});
    await Skill.insertMany(skillData);
    console.log(`The Skills Collection Is Initialized With The Test Data`);
};

async function initializeBatches(){
    await Batch.deleteMany({});
    const m1 = new Map();
    Skill.find({}).then((data) => {
        data.forEach(skill => {
            m1.set(skill.name, skill._id);
        });
        batchData.forEach(batch => {
            batch.skill = m1.get(batch.skill);
        });
        Batch.insertMany(batchData).then(() => console.log(`The Batches Collection Is Initialized With The Test Data`));
    });
    console.log(batchData);
    console.log(`The Batches Collection Is Initialized With The Test Data`);
};

// User.insertMany(userData).then(() => console.log(`The User Collection Is Initialized With The Test Data`));
// Mentor.insertMany(mentorData).then(() => console.log(`The Mentor Collection Is Initialized With The Test Data`));
// initializeSkills();
initializeBatches();