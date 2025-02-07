import cors from 'cors'
import path from "path"
import dotenv from 'dotenv'
import express from 'express'
import session from "express-session"
import MongoStore from 'connect-mongo'
import {router} from './routes/routes.js'
import passport from "./strategies/local_strategy.js";
import { connectDB } from './config/db_conn.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// Import the session change stream function
import { startSessionChangeStream } from './models/session_log_track_model.js';

connectDB();

dotenv.config() //Enviroment Variables

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Serving React's static files
app.use(express.static(path.join(__dirname, "build")))

//CORS policies.
app.use( 
    cors({
      origin: 'http://localhost:3000', //Receiving only from port:3000 for development purposes.
      methods: ['GET', 'POST', 'PUT', 'DELETE'], //Allowed Methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Auith for JWT.
      credentials: true, //allows cookies to be attached with the response.
    })
  );

app.use(express.json()) //Json Parsing
app.use(express.urlencoded({extended: true})) //WebForms Parsing

//Session Store.
app.use( 
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        // MongoStore chosen for session storing
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI,  // We located the session store in our core DB.
            collectionName: "sessions",  
            ttl: parseInt(process.env.SESSION_COOKIE_MAXAGE),  // Session removed from sessions after last interaction with server (15 mins). Same as coookie expiration time.
        }),
        cookie: {
            name: process.env.SESSION_COOKIE_NAME,
            httpOnly: process.env.SESSION_COOKIE_HTTPONLY === "true",
            secure: process.env.SESSION_COOKIE_SECURE === "true",
            expires: null
            //maxAge: parseInt(process.env.SESSION_COOKIE_MAXAGE),  // 1 hour
        },
    })
);                  


// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());


//Routes Funnelling
app.use('/api/v1', router) 

//Express Server Listening...
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
    startSessionChangeStream()
})

