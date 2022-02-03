/*
============================================
; Title: Exercise 5.3 - pug-template
; File Name: kerrey-exercise5.3.js
; Author: Professor Krasso
; Date: 6 February 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to understand Pug Templates with Express and Pug.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-5/exercise5.3
;   Express & Pug used
===========================================
*/

// Require statements 
var express = require("express"); 
var http = require("http");
var path = require("path");
var pug = require("pug");

// App functions
var app = express(); // Placeholder for Express app
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(req, res) { // Get request
  res.render("index", {
      message: "Strive not to be a success, but rather to be of value. - Albert Einstein"
  });
});

// Initialize server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port %s", 8080);
});