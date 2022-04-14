var express = require("express");
var app = express();
app.listen(3000);
var readline = require("readline");
var fs = require("fs");

app.use("/assets", express.static(__dirname + "/assets"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

// Handling register by saving every user as a json line in a txt file (Using express)
app.use(express.json());
app.post("/register", (req, res) => {
  let requestUserJsonString = JSON.stringify(req.body);
  let requestUserJsonObject = req.body;
  let userExists = false;

  // Checking if user was registered before.
  var myInterface = readline.createInterface({
    input: fs.createReadStream("database.txt"),
  });

  myInterface.on("line", function (line) {
    console.log("inside interface");
    let currentLineEmail = JSON.parse(line).email;
    if (requestUserJsonObject.email == currentLineEmail) {
      userExists = true;
    }
  });

  myInterface.on("close", function () {
    if (userExists) {
      res.send("User already exists!");
    } else {
      fs.appendFileSync("./database.txt", requestUserJsonString + "\n");
      res.send("User added successfully!");
    }
  });
});

// Handling login by reading the database file. (using express)
app.post("/login", (req, res) => {
  let requestUserJsonString = JSON.stringify(req.body);
  let requestUserJsonObject = req.body;
  let emailIsCorrect = false;
  let passwordIsCorrect = false;
  let successfulLoginUserName = "";

  // Checking if user exists.
  var myInterface = readline.createInterface({
    input: fs.createReadStream("database.txt"),
  });

  myInterface.on("line", function (line) {
    let currentLineEmail = JSON.parse(line).email;
    let currentLinePassword = JSON.parse(line).password;
    let currentLineUserName = JSON.parse(line).userName;
    if (requestUserJsonObject.email == currentLineEmail) {
      emailIsCorrect = true;
      if (requestUserJsonObject.password == currentLinePassword) {
        passwordIsCorrect = true;
        successfulLoginUserName = currentLineUserName;
      }
    }
  });

  myInterface.on("close", function () {
    if (emailIsCorrect) {
      if (passwordIsCorrect) {
        res.send(`Welcome ${successfulLoginUserName}`);
      } else {
        res.send("Password is not correct!");
      }
    } else {
      res.send("Email is not registered, signup instead");
    }
  });
});
