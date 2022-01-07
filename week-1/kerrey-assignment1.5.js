/*
============================================
; Title: Assignment 1.5 - Hello World
; File Name: kerrey-assignment1.5.js
; Author: Professor Krasso
; Date: 9 January 2022
; Modified By: Seth Kerrey
; Description:
;   Assignment to understand Node.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-1/assignment1.5
===========================================
*/

var http = require("http"); // Referencing

function processRequest(req, res) {
var body = "This is a test of Node in browser"; // String Output
    var contentLength = body.length; 
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080); // Local host