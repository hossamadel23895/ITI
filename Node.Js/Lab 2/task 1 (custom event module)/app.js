var Event = require("events");
var util = require("util");

function Login() {}

util.inherits(Login, Event);

var loginObj = new Login();

loginObj.on("login", function (data) { 
  console.log("login request was called with user : " + data);
});

loginObj.emit("login", "Hossam");
