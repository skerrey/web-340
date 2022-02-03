/*
============================================
; Title: Exercise 5.2 - if-else-render
; File Name: kerrey-exercise5.2.js
; Author: Professor Krasso
; Date: 6 February 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to understand EJS Templates with Express and EJS.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-5/exercise5.2
;   Express & EJS used
===========================================
*/

// Require statements 
var express = require("express"); 
var http = require("http");
var path = require("path");

// App functions
var app = express(); // Placeholder for Express app
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Local composer array
var composers = [
    "Bach",
    "Mozart",
    "Beethoven",
    "Verdi"
];

app.get("/", function(req, res) { // Get request
  res.render("index", {
      names: composers
  })
});

// Initialize server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port %s", 8080);
});