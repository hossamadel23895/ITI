"use strict";

const express = require("express");
const app = express();
app.use(express.json());

// Require my routes.
const indexRoutes = require("./routes/index_routes");
const driverRoutes = require("./routes/client_routes");
indexRoutes(app);
driverRoutes(app);

// Collects & Handles all errors,
// Must have "next" included to be considered as an error handling middleware
app.use((err, req, res, next) => {
    res.status(422).send({Error : err.message});
})
// Make "app" accessible from anywhere
module.exports = app;
