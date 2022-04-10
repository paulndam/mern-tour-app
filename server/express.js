const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const tourRoutes = require("./routes/tourRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
console.log("test eslint");

app.use(bodyParser.json());
app.use(express.static(path.join(`${__dirname}./public`)));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(helmet());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Hello from the server by paul" });
});

app.use("/api/v1/tours", tourRoutes);

module.exports = app;
