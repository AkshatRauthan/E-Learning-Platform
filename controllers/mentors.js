const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding.js");
const mapToken = process.env.MAP_TOKEN
const geocodingClient = mbxGeocoding({accessToken : mapToken})
const Mentor = require("../models/mentor.js");

module.exports.registerMentor = async (req, res, next) => {
    try {
        let mentor = new Mentor(req.body)
        
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