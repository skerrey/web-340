/*
============================================
; Title: Assignment 2.4 - EJS Views
; File Name: kerrey-assignment2.4.js
; Author: Professor Krasso
; Date: 16 January 2022
; Modified By: Seth Kerrey
; Description:
;   Assignment to understand Node and Express app.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-2/assignment2.4
;   Express and Node used
===========================================
*/

// Required for http library, Express App and path
var http = require("http");
var express = require("express");
var path = require("path");

// Placeholder for Express app 
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the "views" directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

// Route interceptors to respond to client/user with request & response
app.get("/", function(req, res){
    res.render("index", {
        // Output text displayed on index.ejs
        firstName: "Seth",
        lastName: "Kerrey",
        address: "221B Baker Street"
    });
});

// Initialize server on port 8080
http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});
