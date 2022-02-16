/*
============================================
; Title: Assignment 5.4 - EMS (Milestone 1)
; File Name: app.js
; Author: Professor Krasso
; Date: 13 February 2022
; Modified By: Seth Kerrey
; Description:
;   Assignment for milestone 1 to build a node app.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-5/assignment5.4
;   Express, EJS, Morgan, and Body-Parser used
===========================================
*/

// Require statements ---------------------------------------------------------
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
const employee = require("./modes/employee");

// App functions --------------------------------------------------------------
var app = express(); // Placeholder for Express app
app.set("views", path.resolve(__dirname, "views")); // Directory 
app.set("view engine", "ejs"); // Views
app.use(logger("short")); // Logger


// Pages: home, new, list, view -------------------------------------------------
app.get("/", function (req, res) { // index.ejs
    res.render("index", {
        title: "Home page"
    });
});

app.get("/new", function (req, res) { // new.ejs
    res.render("new", {
        title: "Data Entry Page"
    });
});

app.get("/list", function (req, res) { // list.ejs
    res.render("list", {
        title: "Employee Records",
    });
});

app.get("/view", function (req, res) { // view.ejs
    res.render("view", {
        title: "View Employee Records",
    });
});

// mLab connection string, Mongoose connection code, employee model ---------------
// Database connection
var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1.ixkw5.mongodb.net/test"; 
mongoose.connect(mongoDB);

// Mongoose Promise
mongoose.Promise = global.Promise;
var db = mongoose.connection; // Database variable to hold connection
db.on("error", console.error.bind(console, "MongoDB connection error: ")); // Error handling
db.once("open", function() {
    console.log("application connected to mLab"); // Connected message
})

// Model
var employee = new employee({
    firstName: "Leroy",
    lastName: "Jenkins"
})

// Initialize server -------------------------------------------------------------
http.createServer(app).listen(8080, function() {
    console.log("Application started on port %s", 8080);
});