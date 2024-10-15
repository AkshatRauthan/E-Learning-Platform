const User = require("../models/user.js");

module.exports.renderRegistrationForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.registerUser = async (req, res, next) => {
    try {
        let {username, password, email, dateOfBirth, address, phoneNo} = req.body;
        const {profile, filename} = req.file;
        const newUser = new User({username, email, dateOfBirth, address, phoneNo, profile});
        const registeredUser = await User.register(newUser, password);
        req.login(newUser, (error) => {
            if (error){
                return next(error);
            } else {
                req.flash("Success", "Welcome To Wand Of Skills!");s
                res.redirect("/batches");
                res.send('New User Created Successfully');
            }
        });
    } catch(error){
        req.flash("error", error.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginPage = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.loginUser = async (req, res) => {
    req.flash("success", "Welcome Back To Wand Of Skills!");
    if (res.locals.redirectUrl) return res.redirect(res.locals.redirectUrl);
    else res.redirect(`/batches`);
};

module.exports.logoutUser = (req, res, next) => {
    req.logout((error) => {
        if (error){
            return next(error);
        } else {
            req.flash("success", "You Are Logged Out Now!");
            res.redirect("/batches");
        }
    })
};