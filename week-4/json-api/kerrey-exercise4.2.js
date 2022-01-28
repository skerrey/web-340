/*
============================================
; Title: Exercise 4.2 - JSON APIs
; File Name: kerrey-exercise4.2.js
; Author: Professor Krasso
; Date: 30 January 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to understand JSON APIs with Express.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-3/exercise4.2
;   Express used
===========================================
*/

// Require statements 
var express = require("express"); 
var http = require("http");

var app = express(); // Placeholder for Express app

app.use(logger("dev")); // Logger

// Return & response
app.get("/customer/:id", function (req, res) {
    var id = parseInt(req.params.id, 10);
    
    res.json({
        firstName: "Seth",
        lastName: "Kerrey",
        employeeId: id
    });
});

// Initialize server on port 3000
http.createServer(app).listen(3000, function() {
    console.log("Application started on port %s", 3000);
});