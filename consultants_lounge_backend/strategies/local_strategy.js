import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import * as session_actions from "../models/session_models.js";

// Configure Local Strategy for username/password authentication
passport.use(
  new LocalStrategy(
    { usernameField: "email" }, // Specify email instead of username
    async (email, password, done) => {
      try {
        const user = await session_actions.find_user_by_email(email);
        if (!user) return done(null, false, { message: "Invalid credentials." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return done(null, false, { message: "Invalid credentials." });

        return done(null, user); // Successfully authenticated
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize & Deserialize User for Sessions
passport.serializeUser((user, done) => done(null, user.id)); // saves user_id in sessionStore

//Gets the User from the DB with the deserialized user_id from the session
passport.deserializeUser(async (id, done) => {
  const user = await session_actions.find_user_by_id(id);
  done(null, user);
});

export default passport;
