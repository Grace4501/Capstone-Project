import cors from 'cors'
import path from "path"
import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import {router} from './routes/routes.js'
import passport from "./strategies/local_strategy.js";
import { connectDB } from './config/db_conn.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Tracking resources
import session from "express-session"
import MongoStore from 'connect-mongo'
import { startSessionChangeStream } from './controls/events/change_stream.js';
import { track_metadata_from_user } from './controls/middlewares/tracker.js'


connectDB();

dotenv.config() //Enviroment Variables

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Serving React's static files
app.use(express.static(path.join(__dirname, "build")))

//CORS policies..
app.use( 
    cors({
      origin: 'http://localhost:3000', //Receiving only from port:3000 for development purposes.
      methods: ['GET', 'POST', 'PUT', 'DELETE'], //Allowed Methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Auith for JWT.
      credentials: true, //allows cookies to be attached with the response.
    })
  );

app.use(express.json()) //Json Parsing
app.use(express.urlencoded({extended: true})) //WebForms Parsing.
app.use(cookieParser());  

app.use(async (req, res, next) => {
    // Check if the client has a session cookie
    const hasSessionCookie = req.cookies["connect.sid"];

    if (hasSessionCookie) { req.isNew = false; console.log(hasSessionCookie);} // If session exists, it's not new.
        
    else req.isNew = true; // No session cookie means a new visitor
    
    next();
});




//Session Store
app.use( 
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        // MongoStore chosen for session storing.
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI,  // We located the session store in our core DB.
            collectionName: "sessions",  
            ttl: 60*15,  // Session removed from sessions after last interaction with server (15 mins). Same as coookie expiration time.
        }),
        cookie: {
            name: process.env.SESSION_COOKIE_NAME,
            httpOnly: process.env.SESSION_COOKIE_HTTPONLY === "true",
            secure: process.env.SESSION_COOKIE_SECURE === "true",
            //expires: parseInt(process.env.SESSION_COOKIE_MAXAGE)
            maxAge: parseInt(process.env.SESSION_COOKIE_MAXAGE),  // 1 hour
        },
    })
);                  


// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());


//Routes Funnelling
app.use('/api/v1', track_metadata_from_user, router) 

//Express Server Listening...
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
    startSessionChangeStream()
})

