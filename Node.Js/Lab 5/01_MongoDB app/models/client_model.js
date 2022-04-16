// Client Model that do all database operations on the client table
"use strict";
const mongoose = require("mongoose");
// Define your data schema to control the incoming data structure.
const ClientSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
// Define the collection name and schema used.
const Client = mongoose.model("client", ClientSchema);
module.exports = Client;
