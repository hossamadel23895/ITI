"use strict";

var http = require("http");
var readline = require("readline");
var fs = require("fs");

var acceptedPages = ["/", "/register", "/login", "/styles.css"];
http
  .createServer((req, res) => {
    // Handling homepage request.
    if (req.url == "/" && req.method.toLowerCase() === "get") {
      const readStream = fs.createReadStream("./index.html");
      res.writeHead(200, { "Content-type": "text/html" });
      readStream.pipe(res);
    }

    // Handling css file request.
    if (req.url == "/styles.css") {
      const readStream = fs.createReadStream("./styles.css");
      res.writeHead(200, { "Content-type": "text/css" });
      readStream.pipe(res);
    }

    // Handling random requests.
    if (!acceptedPages.includes(req.url)) {
      res.writeHead(404, { "Content-type": "text/plain" });
      res.write("Content not found!");
      res.end();
    }

    // Handling register by saving every user as a json line in a txt file.
    if (req.url == "/register" && req.method.toLowerCase() === "post") {
      req.on("data", (buffer) => {
        let requestUserJsonString = buffer.toString();
        let requestUserJsonObject = JSON.parse(requestUserJsonString);
        let userExists = false;

        // Checking if user was registered before.
        var myInterface = readline.createInterface({
          input: fs.createReadStream("database.txt"),
        });

        myInterface.on("line", function (line) {
          let currentLineEmail = JSON.parse(line).email;
          if (requestUserJsonObject.email == currentLineEmail) {
            userExists = true;
          }
        });

        myInterface.on("close", function () {
          if (userExists) {
            res.end("User already exists!");
          } else {
            fs.appendFileSync("./database.txt", requestUserJsonString + "\n");
            res.end("User added successfully!");
          }
        });
      });
    }

    // Handling login by reading the database file.
    if (req.url == "/login" && req.method.toLowerCase() === "post") {
      req.on("data", (buffer) => {
        let requestUserJsonString = buffer.toString();
        let requestUserJsonObject = JSON.parse(requestUserJsonString);
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
              res.end(`Welcome ${successfulLoginUserName}`);
            } else {
              res.end("Password is not correct!");
            }
          } else {
            res.end("Email is not registered, signup instead");
          }
        });
      });
    }
  })
  .listen(3000, () => console.log("Server is running on port 3000"));
