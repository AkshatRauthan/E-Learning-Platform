const mongoose = require(`mongoose`);
const User = require('../models/user.js');
const Batch = require('../models/batch.js');
const Mentor = require('../models/mentor.js');
const Project = require('../models/project.js');
const Skill = require('../models/skill.js');
const {batchData, skillData} = require("./data.js");

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
    await Batch.insertMany(batchData);
    console.log(`The Batches Collection Is Initialized With The Test Data`);
};

initializeBatches();