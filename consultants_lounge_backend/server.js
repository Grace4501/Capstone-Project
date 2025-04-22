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
import { errorHandler } from './middleware/errorHandler.js';


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
      origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // Use env variable for CORS origin
      methods: ['GET', 'POST', 'PUT', 'DELETE'], //Allowed Methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Auith for JWT.
      credentials: true, //allows cookies to be attached with the response.
    })
  );

app.use(express.json()) //Json Parsing
app.use(express.urlencoded({extended: true})) //WebForms Parsing

app.use((req,res,next)=>{
    if(!req.session) req.isNew = true
    else req.isNew = false

    next()
})

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
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
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

// 404 Handler - Place this after all routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found',
        path: req.originalUrl
    });
});

// Error Handler (Should be last middleware)
app.use(errorHandler);

//Express Server Listening...
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
    startSessionChangeStream()
})

