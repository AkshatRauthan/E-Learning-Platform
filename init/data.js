const batchData = [
    {
        title: "Data Science With AI",
        description:"Master C++ with DSA and engage in an interactive learning environment with top industry experts guiding you throughout the course specifically designed for people who want to build their career in tech industry.",
        features:["Complete DSA", "DPP's", "Weekly Tests", "Live + Recorded Sessions"],
        startDate:Date(),
        skill : "Data Science & Analytics",
        duration: "6 months",
        image:"https://res.cloudinary.com/dqtaaxgby/image/upload/v1728819436/ebe85f91-7ed7-449a-bf67-638176249388_sjp0nu.jpg",
        mentor : "670cf7ffa9e34830ab203929"
    },
    {
        title: "Data Analytics",
        description:"Master C++ with DSA and engage in an interactive learning environment with top industry experts guiding you throughout the course specifically designed for people who want to build their career in tech industry.",
        features:["Complete DSA", "DPP's", "Weekly Tests", "Live + Recorded Sessions"],
        skill : "DSA",
        startDate:Date(),
        duration: "6 months",
        image:"https://res.cloudinary.com/dqtaaxgby/image/upload/v1728819435/4e87b54a-fd4a-4c8d-95e1-db26ff4912ea_togw3w.jpg",
        mentor : "670cf7ffa9e34830ab203929"
    },
    {
        title: "Backend Development",
        description:"Master C++ with DSA and engage in an interactive learning environment with top industry experts guiding you throughout the course specifically designed for people who want to build their career in tech industry.",
        features:["Complete DSA", "DPP's", "Weekly Tests", "Live + Recorded Sessions"],
        skill : "Software Development",
        startDate:Date(),
        duration: "6 months",
        image:"https://res.cloudinary.com/dqtaaxgby/image/upload/v1728819434/63eb1ae1194b22195fe5d967_x1tjnn.png",
        mentor : "670cf7ffa9e34830ab203929"
    },
    {
        title: "Decode C++ with DSA",
        description:"Master C++ with DSA and engage in an interactive learning environment with top industry experts guiding you throughout the course specifically designed for people who want to build their career in tech industry.",
        features:["Complete DSA", "DPP's", "Weekly Tests", "Live + Recorded Sessions"],
        skill : "DSA",
        startDate:Date(),
        duration: "6 months",
        image:"https://res.cloudinary.com/dqtaaxgby/image/upload/v1728819434/63eb1ae1194b22195fe5d967_x1tjnn.png",
        mentor : "670cf7ffa9e34830ab203929"
    }
]

const skillData = [
    { name : "DSA"},
    { name : "Software Development"},
    { name : "Data Science & Analytics"},
    { name : "Buissness Technology"},
    { name : "Banking And Accountancy"},
    { name : "Machine Learning"},
    { name : "Network Engineering"}
]

const userData = {
    email: "akshatrauthan9433@gmail.com",
    phoneNo : 1234567890,
    dateOfBirth : Date("10-10-1999"),
    address : "Punjabi Bagh, Delhi",
}

const mentorData = {
    userId : "670cf5f2d7d5900bd1628ee9",
    domain : "670ce8e64e5c6a5a6d14eb94",
    experience : [
        "Lead Tech Mentor at PW", "Training Consultant for 3+ Edtech Startups", "Ex-R&D Head, ABC for Technology Training", "Ex - Sr. Technical Trainer", "Rooman Technologies", "Ex - Educator", "Unacademy"
    ],
    rating : 9
}

module.exports = {batchData, skillData, userData, mentorData};