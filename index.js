const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("dotenv").config({ path: ".dev.env" });
const { mainCalled } = require("./jwtStrategy");
const { localAuth } = require("./localStrategy");
const LocalStrategy = require("passport-local").Strategy;
app.use(passport.initialize());
passport.use(new LocalStrategy(localAuth));
mainCalled(passport);

console.log(process.env.NODE_ENV);

app.use(express.json());
app.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (!req.user) {
      return res
        .status(400)
        .json({ message: "sorry couldn't authenticate you" });
    }
    const token = jwt.sign(req.user, process.env.SECRET);
    return res.status(200).send({ token: token });
  }
);
app.get(
  "/check",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user);
    res.send({ message: "inside checker funtion" });
  }
);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
