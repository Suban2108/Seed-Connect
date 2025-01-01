import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';

// Serialize user to save user information into the session
passport.serializeUser((user, done) => {
    done(null, user);
});

// Deserialize user to retrieve user information from the session
passport.deserializeUser((user, done) => {
    done(null, user);
});

// Use Google OAuth 2.0 Strategy for Passport
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:4000/auth/google/callback',
    passReqToCallback: true
  },
  (req, accessToken, refreshToken, profile, done) => {
    // Handle the profile and tokens here
    return done(null, profile);
  }
));

export default passport;
