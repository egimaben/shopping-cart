var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.serializeUser(function(user, done) {
 done(null, user);
});
passport.deserializeUser(function(user, done) {
 done(null, user);
});
passport.use(
 new GoogleStrategy(
  {
   clientID: process.env.GOOGLE_CLIENT_ID||"612557492786-9uhanndrqhdj2c7vg5o2mlsm3urm64uj.apps.googleusercontent.com",
   clientSecret: process.env.GOOGLE_CLIENT_SECRET||"2AP2nFXW-lNtClJGFA4tgEYE",
   callbackURL: "https://shopping-cart-online.herokuapp.com/api/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   var userData = {
    email: profile.emails[0].value,
    name: profile.displayName,
    token: accessToken
   };
   done(null, userData);
  }
 )
);