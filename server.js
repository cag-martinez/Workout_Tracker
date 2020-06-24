const express = require("express");
const mongojs = require("mongojs");
const morgan = require("morgan");
const mongoose = require("mongoose");

//const PORT = 3000;
const PORT = process.env.PORT || 3000;

const db = require("./model");
const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethods", { useNewUrlParser: true });

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

app.listen(PORT, () => console.log(`server listening at http:localhost:${PORT}/`))