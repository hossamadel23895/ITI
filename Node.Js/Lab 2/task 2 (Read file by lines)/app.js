var readline = require("readline");
var fs = require("fs");

var myInterface = readline.createInterface({
  input: fs.createReadStream("test_text.txt"),
});

var lineNo = 1;
myInterface.on("line", function (line) {
  console.log("Line number " + lineNo + ": " + line);
  lineNo++;
});
