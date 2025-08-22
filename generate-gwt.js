var jwt = require("jsonwebtoken");

const customerIdentifier = "diego1245";
const KEY_ID = ""; // read from .env;
const SECRET = ""; // read from .env

var payload = {
  scope: "user",
  external_id: customerIdentifier,
  // name: "#{customerName}", // optional
  // email: "#{customerEmail}", // optional
  // email_verified: true, // optional
};
var token = jwt.sign(payload, SECRET, {
  keyid: KEY_ID,
  expiresIn: 3600, // optional
});

console.log("jwt =>", token);
