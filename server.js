const express = require("express");
const morgan = require("morgan");

const PORT = 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));

app.listen(PORT, () => console.log(`server listening at http:localhost:${PORT}/`))