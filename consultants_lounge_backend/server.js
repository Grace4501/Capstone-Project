import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import session from "express-session"
import MongoStore from 'connect-mongo'
import {router} from './routes/routes.js'
import { connectDB } from './config/db_conn.js';

connectDB();

dotenv.config() //Enviroment Variables

const app = express()

app.use(express.json()) //Json Parsing
app.use(express.urlencoded({extended: true})) //WebForms Parsing

app.use( //Session Store
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI,  // Using Atlas MongoDB
            collectionName: "sessions",  // Custom collection to store sessions
            ttl: 60 * 60 * 24,  // Sessions expire after 24 hours
        }),
        cookie: {
            name: process.env.SESSION_COOKIE_NAME,
            httpOnly: process.env.SESSION_COOKIE_HTTPONLY === "true",
            secure: process.env.SESSION_COOKIE_SECURE === "true",
            maxAge: parseInt(process.env.SESSION_COOKIE_MAXAGE),  // 1 hour
        },
    })
);                  

app.use( //CORS policies.
    cors({
      origin: 'http://localhost:3000', //Receiving only from port:3000 for development purposes.
      methods: ['GET', 'POST', 'PUT', 'DELETE'], //Allowed Methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Auith for JWT.
      credentials: true, //allows cookies to be attached with the response.
    })
  );

app.use('/api/v1', router) //Routes Funnelling
/*
app.get('/test-session', (req, res) => {
    req.session.user = { username: "testUser2" };  // Assign a test value
    console.log("Session Data:", req.session);
    res.json({ message: "Session set", session: req.session });
});
*/
//Express Server Listening...
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})

/*
{"_id":"fCLhF1669h6y-8tyo4s4UeUvFcy5Apr0",
"expires":{"$date":{"$numberLong":"1738637095959"}},
"session":"{\"cookie\":{\"originalMaxAge\":3600000,\"expires\":\"2025-02-04T02:33:09.010Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"user\":{\"username\":\"testUser\"}}"}
*/