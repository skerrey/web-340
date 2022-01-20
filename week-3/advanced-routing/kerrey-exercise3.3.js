/*
============================================
; Title: Exercise 3.3 - Advanced Routing
; File Name: kerrey-exercise3.3.js
; Author: Professor Krasso
; Date: 23 January 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to understand advanced routing with Express, Morgan and EJS
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-3/exercise3.3
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
app.get("/:productId", function (req, res) {
    var productId = parseInt(req.params.productId, 10);
    
    res.render("index", {
        productId: productId
    });
});
http.createServer(app).listen(3001, function() {
    console.log("Application started on port %s", 3001);
});