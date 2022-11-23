const express = require("express");
const app = express();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJwt = require("passport-jwt");
// const JWtStrategy = passportJwt.Strategy;
// const ExtractJWT = passportJwt.ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;
app.use(passport.initialize());
const data = JSON.parse(fs.readFileSync("./data.json", { encoding: "utf-8" }));

passport.use(
  new LocalStrategy((username, password, callback) => {
    const found = data.filter((_data) => {
      if (_data.username === username && _data.password === password) {
        return _data;
      }
    });
    if (found.length) {
      return callback(null, found[0], {
        message: "success in authenticationg you",
      });
    }
    return callback(null, false, {
      message: "sorry couldn't authenticate you",
    });
  })
);
// passport.use(
//   new JWtStrategy(
//     {
//       jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//       secretOrKey: "my_secret",
//     },
//     function (jwtPayload, callback) {
//       console.log(jwtPayload);
//       const found = data.filter((_data) => {
//         if (
//           _data.username === jwtPayload.username &&
//           _data.password === jwtPayloadpassword
//         ) {
//           return _data;
//         }
//       });
//       if (found.length) {
//         return callback(null, jwtPayload, {
//           message: "success in authenticating",
//         });
//       }
//       return callback(null, false, {
//         message: "error in jwt",
//       });
//     }
//   )
// );
app.use(express.json());
app.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ message: "sorry couldn't authenticate you" });
    }
    req.user = user;
    const token = jwt.sign(user, "my_secret");
    return res.status(200).send({ token: token });
  })(req, res);
});
// app.post("/check", (req, res, next) => {
//   passport.authenticate("jwt", { session: false }, (err, user, info) => {
//     if (err || !user) {
//       return res
//         .status(400)
//         .json({ message: "sorry couldn't authenticate you" });
//     }
//     req.user = user;
//   })(req, res);
// });
app.listen(3000, () => {
  console.log(`server listening on port 3000`);
});
