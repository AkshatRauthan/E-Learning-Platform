if (process.env.Node_ENV != "production"){
    require('dotenv').config();
}

const mongoose = require(`mongoose`);
const User = require('./models/user.js');
const Batch = require('./models/batch.js');
const Mentor = require('./models/mentor.js');
const Project = require('./models/project.js');
const Skill = require('./models/skill.js');
const ExpressError = require(`./utils/expressError.js`);
const multer = require(`multer`);

const express =  require(`express`);
const app = express();
const ejsMate = require('ejs-mate');
const path = require(`path`);
const methodOverride = require("method-override");
const session = require(`express-session`);
const flash = require(`connect-flash`);
const batch = require('./models/batch.js');

const batchRouter = require(`./routes/batch.js`);
const mentorRouter = require(`./routes/mentor.js`);
const projectRouter = require(`./routes/project.js`);
const userRouter = require(`./routes/user.js`);

const sessionOptions = {
    secret: process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 1000, // Expiry Date : 7 Days After Their Date Of Creation
        maxAge : 7 * 24 * 60 * 1000,
        httpOnly : true,
    },
};

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine(`ejs`, ejsMate);
app.use(session(sessionOptions));
app.use(flash());

async function main(){
    await mongoose.connect("mongodb+srv://akshatrauthan9433:d0pd7mh3x5msqoUp@cluster0.y2j6j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

main().then(() => console.log(`Connection Successfull`))
.catch((error) => console.log(error));

app.listen(8080, () => {
    console.log(`\nThe App Is Listenig On Port 8080`);
});

// app.use(`/batches/:id/reviews`, reviewRouter);
// app.use(`/batches`, mentorRouter);
app.use(`/user`, userRouter);
// app.use(`/project`, projectRouter);

// Handling Errors
app.use((req, res, next) => {
    if (req.url == "/favicon.ico") next();
    else next(new ExpressError(404,"Requested Page Is Not Found!!"));
});

app.use((err, req, res, next) => { 
    console.log(err);
    let {statusCode = 500, message = "Encountered Some Error!"} = err;
    console.log(`\nError Encounered!!! \n${message}!!!`);
    res.status(statusCode).render("error.ejs", {err});
});