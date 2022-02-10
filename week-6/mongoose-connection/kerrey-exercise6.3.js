/*
============================================
; Title: Exercise 6.3 - Mongoose Connection
; File Name: kerrey-exercise6.3.js
; Author: Professor Krasso
; Date: 13 February 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to understand Mongoose.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-5/exercise6.3
;   Express, Morgan, & Mongoose used
===========================================
*/

// Require statements 
var express = require("express"); 
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

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

// App functions
var app = express(); // Placeholder for Express app
app.use(logger("dev")); // Logger

// Initialize server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port %s", 8080);
});