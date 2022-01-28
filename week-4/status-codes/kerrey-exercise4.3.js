/*
============================================
; Title: Exercise 4.3 - HTTP Status Codes
; File Name: kerrey-exercise4.2.js
; Author: Professor Krasso
; Date: 30 January 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to understand HTTP status codes with Express and Morgan.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-3/exercise4.3
;   Express & Morgan used
===========================================
*/

// Require statements 
var express = require("express"); 
var http = require("http");
var logger = require("morgan");

var app = express(); // Placeholder for Express app

app.use(logger("dev")); // Logger

// Return & response
// Requests using status codes
app.get("/not-found", function (req, res) { // Error 404
    res.status(404);
    
    res.json({
        error: "Resource not found."
    });
});

app.get("/ok", function (req, res) { // Error 200
    res.status(200);
    
    res.json({
        error: "Page loaded correctly."
    });
});

app.get("/not-implemented", function (req, res) { //Error 501
    res.status(501);
    
    res.json({
        error: "Page not implemented."
    });
});

// Initialize server on port 300
http.createServer(app).listen(3000, function() {
    console.log("Application started on port %s", 3000);
});