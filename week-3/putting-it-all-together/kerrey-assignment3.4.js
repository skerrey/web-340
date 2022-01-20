/*
============================================
; Title: Assignment 3.4 - Putting it all together
; File Name: kerrey-assignment3.4.js
; Author: Professor Krasso
; Date: 23 January 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to understand logging with Express, Morgan and EJS
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-3/assignment3.4
;   Express, Morgan, and Node used
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
// App.get for home page
app.get("/", function (req, res) {
    res.render("index", {
        message: "home page"
    });
});

// App.get for about page
app.get("/about", function(req, res){
    res.render("about", {
        message: "about page"
    });
});

// App.get for contact page
app.get("/contact", function(req, res){
    res.render("contact", {
        message: "contact page"
    });
});

// App.get for products
app.get("/products", function(req, res){
    res.render("products", {
        message: "products page"
    });
});

// Create web server - port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port %s", 8080);
});