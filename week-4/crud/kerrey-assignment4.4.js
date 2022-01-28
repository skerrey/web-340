/*
============================================
; Title: Assignment 4.4 - cURL
; File Name: kerrey-assignment4.4.js
; Author: Professor Krasso
; Date: 30 January 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to understand cURL with Express and Morgan.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-4/exercise4.4
;   &
;   GitHub repo buwebdev/web-340/week-4/crud/app.js
;       https://github.com/buwebdev/web-340/blob/master/week-4/crud/app.js
;   Express & Morgan used
===========================================
*/

// Require statements 
var express = require("express"); 
var http = require("http");
var logger = require("morgan");

var app = express(); // Placeholder for Express app

app.use(logger("dev")); // Logger

app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) { // Get request
  res.send("API invoked as an HTTP GET request.");
});

app.put("/", function(req, res) { // Put request
  res.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(req, res) { // Post request
  res.send("API invoked as an HTTP POST request");
});

app.delete("/", function(req, res) { // Delete request
  res.send("API invoked as an HTTP DELETE request");
});

// Initialize server
http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});