// Configuring the database
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
// const route = require("./route")(app);
const bodyParser = require("body-parser");
const cors = require('cors');

// import express (after npm install express)
const express = require("express");

// create new express app and save it as "app"
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// const route = require("./route")(app);
// app.use(route());

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// server configuration
const PORT = 8080;

// create a route for the app

app.get("/ping", (req, res) => {
  res.send("Hello World");
});

app.use(cors());
require("./route")(app);
// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
