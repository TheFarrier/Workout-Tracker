const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models/");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://TheFarrier:WorkoutTracker1@ds215388.mlab.com:15388/heroku_g4rtt6v8");

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});