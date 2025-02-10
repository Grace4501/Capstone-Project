import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import * as session_actions from "../models/session_models.js";


// Configure Local Strategy for username/password authentication. This method is called when passport.Authenthicate("local") is esxecuting calling its local strategy
passport.use(
  new LocalStrategy(
    { usernameField: "email" }, // Specify email instead of username
    async (email, password, done) => {
      try {
        //As we are in using a strategy it means we are authenticating a user that can be a consultant or client
        //const user_role is actually a Consultan/Client containing the user info in user_role.info
        const user_role = await session_actions.find_user_by_email(email);
        if (!user_role) return done(null, false, { message: "Invalid credentials." });

        const isMatch = await bcrypt.compare(password, user_role.info.password);
        if (!isMatch) return done(null, false, { message: "Invalid credentials." });

        return done(null, user_role); // Successfully authenticated
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Serialize User for Sessions if strategy shows no errors. When the user logs in.
passport.serializeUser(async (user, done) => {
    console.log(`...\nSerializing user_id ${user.id} into session store...`)
    done(null, user.id)
}); // saves user_id in sessionStore.

//Gets the User from the User Collection with the deserialized user_id from the session
passport.deserializeUser(async (id, done) => {
    console.log("...\nDeserializing user from session store with id: " + id)
    try{
        const user = await session_actions.find_user_by_id(id);
        if(!user) throw new Error("User not found")
        console.log("User found: " + user)
        done(null, user);
    }catch(e){
        console.log(e)
        done(e, null)
    }

});

export default passport;
