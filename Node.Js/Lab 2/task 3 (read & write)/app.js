// 1 - Rename file
// -----------------
// var fs = require("fs");
// fs.rename("./test.txt", "./info.txt", function (err) {
//   if (err) console.log("ERROR: " + err);
// });

// 2 - Remove line
// ----------------
// const fs = require("fs");

// const removeLines = (data, lines = []) => {
//   return data
//     .split("\n")
//     .filter((val, idx) => lines.indexOf(idx) === -1)
//     .join("\n");
// };

// fs.readFile("./info.txt", "utf8", (err, data) => {
//   fs.writeFile("./info.txt", removeLines(data, [0]), "utf8", (err) => {});
// });

// 3 - 1 read sync
// ----------------
// const fs = require("fs");
// console.log(fs.readFileSync("./data.json", "utf8"));
// console.log("After file");

// 3 - 2 read async
// ----------------
// const fs = require("fs");
// const util = require("util");

// const readFilePromiseVersion = util.promisify(fs.readFile);
// let getStuff = () => readFilePromiseVersion("./data.json");
// getStuff().then((data) => console.log(data));
// console.log("After read code");

// 4 - write to file
// ------------------
// const fs = require("fs");
// fs.appendFileSync("./info.txt", "test line \n");

// 5 - Create directory
// ----------------------
// var fs = require("fs");
// var dir = "./testDirectory";

// if (!fs.existsSync(dir)) {
//   fs.mkdirSync(dir);
// }
