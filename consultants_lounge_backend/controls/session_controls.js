import * as session_actions from "../models/session_models.js"
import passport from "passport";
import bcrypt from "bcrypt"
import mongoose from "mongoose";

export const user_register = async (req, res) => {
    try {
        
        const { first_name, middle_name, last_name, email, password, phone } = req.body;

        if (!first_name || !last_name || !email || !password || !phone) {
            return res.status(400).json({ message: "All required fields must be filled." });
        }

        const existingUser = await session_actions.find_user_by_email(email);
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await session_actions.create_user({
            first_name,
            middle_name,
            last_name,
            email,
            password: hashedPassword,
            phone
        });

        res.status(201).json({ message: "User registered successfully."});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", problem: error });
    }
};

export const user_login = async (req, res, next)=>{

    //The user parameter comes from the user value returned by done(null, user) in local strategy


    const auth_middleware = passport.authenticate("local", (err, user, info) => { //Uses local strategy to authenticate credentials.
        if (err) return next(err);  // If any error occurs, pass it to next middleware.
        //checks for the user in DB
        if (!user) {
            console.log("--\nProblem logging in : ", info.message)
            return res.status(401).json({ message: info.message });  // Send error message if user not found
        }
        //Uses the authenticateed user to log the uses into session by calling serializeUser and storing user_id in req.session.passport.user
       
        console.log(`User: ${user.info.email} has been authenthicated`)

        //This inserts a new session document into sessions
        req.logIn(user.info, async (err) => {

            if (err) return console.log("Serializing Error: ", err)
            
                //else...
            console.log(`...\nUser_id: ${user.info._id} has been serialized into session store`)

            // Preserve existing session data.
            req.session.metadata = req.session.metadata || {}; 
            req.session.activity = req.session.activity || {}; 
            req.session.metadata.ip_address = req.socket.remoteAddress;
            req.session.metadata.user_agent = req.headers['user-agent'];
            req.session.activity.logged_in = true;

            // Save session to persist changes.
            //This updated the session in sessions
            await req.session.save((saveErr) => {
                if (saveErr) {
                    console.error("Session save error:", saveErr);
                }
                console.log(`Session (${req.sessionID}) updated with metadata and activity.`);
                res.json({ message: "Login successful", user });
            });
       
        });
    })



    console.log("...\nA user is trying to log in...")
    auth_middleware(req, res, next);  // passport.authenticate("local") return a func that needs to be executed using (req,res,next)..
    //console.log(req.User).
}

export const user_logout = (req, res) => {
 
    //Remove the session record from the session store
    req.logout((err) => {
        if (err) return next(err);

        
        // Destroy the session
        //destroy is implictly called when no callback is passed as args
        req.session.destroy((err) => {
            if (err) return next(err);

            // Explicitly clear the cookie from the browser
            res.clearCookie("connect.sid"); 
            res.json({ message: "Logged out successfully" });
            console.log("--\nUser logged out succesfully.");
        });
    });
}
