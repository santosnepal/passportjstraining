// passport-jwt
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "my_secret";
const jwtAutherer = (payload, done) => {
  //   console.log(payload);
  done(null, payload);
};
const mainCalled = (passport) => {
  passport.use(new JwtStrategy(opts, jwtAutherer));
};
module.exports = { mainCalled };
