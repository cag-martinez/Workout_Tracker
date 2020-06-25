const express = require("express");
//const mongojs = require("mongojs");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;``

const db = require("./models");
const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://<cag-martinez>:<Mexcomp1@>@ds131942.mlab.com:31942/heroku_xgrk3bmm", { useNewUrlParser: true });

require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)

app.listen(PORT, () => console.log(`server listening at http:localhost:${PORT}/`))