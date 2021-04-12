var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("./data/DBConnection");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const complaintRouter = require("./routes/Complaint.routes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/complaint", complaintRouter);

module.exports = app;
