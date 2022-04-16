"use strict";
const app = require("./app");

// Connect to the database.
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/lab5_NodeJs_Clients_DB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connects on the port
app.listen(3000, () => {
  console.log("Server is running ...");
});
