/*
============================================
; Title: Exercise 2.3 - Routes
; File Name: kerrey-exercise2.3.js
; Author: Professor Krasso
; Date: 16 January 2022
; Modified By: Seth Kerrey
; Description:
;   Assignment to understand Node and Express app
;       with specific routes and bad requests.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-2/exercise2.3
;   Express and Node used
; Comments:
;   app.method(url_pattern, optional_functions, request_handler_function);
;   app.get(“/”, function(request, response) { // response code });
;   app.get(“/about”, function(request, response) { // response code });
;   app.post(“/forms/update_user_info.json”, function(request, response) { // response code });
;   app.put(“/user”, function(request, response) { // response code });
;   app.delete(“/user”, function(request, response) { // response code });
===========================================
*/

var express = require("express"); //Express app
var http = require("http"); //Http library

var app = express(); //Local variable for Express app

// Route interceptors to respond to client/user with request & response
// Intercept specific routes
app.get("/", function(req, res){
    res.end("Welcome to the homepage.\n");
});

app.get("/about", function(req, res){
    res.end("Welcome to the homepage.\n");
});

app.get("/contact", function(req, res){
    res.end("Welcome to the homepage.\n");
});

// Route error message for bad request (wrong URL)
// Global route handler to handle bad requests
app.use(function(req, res){
    res.statsCode = 404;
    res.end("404!\n");
});

// Create node server and listen on port 3000
http.createServer(app).listen(3000, function() {
    console.log("Application started on port %s", 3000);
});