const add = (...arr) =>
  arr.findIndex((e) => typeof e === "string") === -1
    ? arr.reduce((pv, cv) => pv + cv, 0)
    : "Can't do math operations on characters! Please enter numbers only.";

const sub = (...arr) =>
  arr.findIndex((e) => typeof e === "string") === -1
    ? arr.reduce((pv, cv) => pv - cv, arr[0] * 2)
    : "Can't do math operations on characters! Please enter numbers only.";

const multiply = (...arr) =>
  arr.findIndex((e) => typeof e === "string") === -1
    ? arr.reduce((pv, cv) => pv * cv, 1)
    : "Can't do math operations on characters! Please enter numbers only.";

const divide = (...arr) =>
  arr.findIndex((e) => typeof e === "string") === -1
    ? arr.reduce((pv, cv) => pv / cv, arr[0] ** 2)
    : "Can't do math operations on characters! Please enter numbers only.";

module.exports = {
  add: add,
  sub: sub,
  multiply: multiply,
  divide: divide,
};
