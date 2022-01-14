/*
============================================
; Title: Exercise 2.2 - Hello World with Express
; File Name: kerrey-exercise2.2.js
; Author: Professor Krasso
; Date: 16 January 2022
; Modified By: Seth Kerrey
; Description:
;   Assignment to understand Node and Express app.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-2/exercise2.2
;   Express and Node used
; Comments:
;   var express = require(“express”) – Requires the Express module just as you would require other modules
;   var app = express() – Calls the express function to start a new Express application
;   http.createServer(app).listen(8080) – Starts the server on port 8080
===========================================
*/

// Require statement for express / http
var express = require('express'); //Calls express function to start new Express application
var http = require('http'); //Library to start server

var app = express(); //Variable for placeholder for Express app

//Return console.log for app/client to access URL
app.use(function(req, res)
{
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
})

//Output message application started and what port
http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);
});