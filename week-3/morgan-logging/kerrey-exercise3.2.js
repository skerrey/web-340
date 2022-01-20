/*
============================================
; Title: Exercise 3.2 - Logging
; File Name: kerrey-exercise3.2.js
; Author: Professor Krasso
; Date: 23 January 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to understand logging with Express, Morgan and EJS
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-3/exercise3.2
;   Express, Morgan, and Node used
;
===========================================
*/

// Require statements 
var express = require("express"); 
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express(); // Placeholder for Express app

app.set("views", path.resolve(__dirname, "views")); // Path for "views" for Express app
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

// Return & response
app.get("/", function (req, res) {
    res.render("index", {
        message: "Welcome to the Morgan Logger Example by Seth Kerrey!"
    });
});
http.createServer(app).listen(3000, function() {
    console.log("Application started on port %s", 3000);
});


{/* <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul class="navbar-nav">
        <li class="nav-item active">
            nav-link" href="#">Home
        li>
        <li class="nav-item">
            nav-link" href="#">About
        li>
        <li class="nav-item">
            nav-link" href="#">Contact Us
        li>
    ul>
nav>
<div role="main" class="container">
    <br/><br/>
    <h2><%= message %></h2>
</div> */}