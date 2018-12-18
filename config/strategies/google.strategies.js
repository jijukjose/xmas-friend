var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = function () {
    var port = process.env.PORT||3000;
    passport.use(new GoogleStrategy({
            //clientID: '877264380453-pp1l7e8ben5oi7be150fns13a6sbml0g.apps.googleusercontent.com',
            clientID: '330971086891-15cqbie6ofp5gto6pjoke2kc672s5096.apps.googleusercontent.com',
            //clientSecret: 'MhUcl6Lc8vj3QdG4EkkgBq_m',
            clientSecret: 'I3dwktSnvSISV1Xr_iifOUvD',
            callbackURL: 'https://guarded-plains-98992/auth/google/callback',
        },
        function(req, accessToken, refreshToken, profile, done){
            var user = {};
            user.email = profile.emails[0].value;
            user.image = profile._json.image.url;
            user.displayName = profile.displayName;

            user.google = {};
            user.google.id = profile.id;
            user.google.token = accessToken;
            done(null, user);//attaches the profile to the session which can be accessed by the routes.
        }
    ));
};