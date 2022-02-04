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

// Require statements 
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// App functions
var app = express(); // Placeholder for Express app
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs"); // Views
app.use(logger("short")); // Logger

app.get("/", function (req, res) { // Get request
    res.render("index", {
        title: "Home page"
    });
});

// Initialize server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port %s", 8080);
});