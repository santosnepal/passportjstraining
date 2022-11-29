const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json", { encoding: "utf-8" }));
const localAuth = (username, password, callback) => {
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
};
module.exports = { localAuth: localAuth };
