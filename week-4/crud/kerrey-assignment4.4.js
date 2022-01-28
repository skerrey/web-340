/*
============================================
; Title: Assignment 4.4 - cURL
; File Name: kerrey-assignment4.4.js
; Author: Professor Krasso
; Date: 30 January 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to understand cURL with Express and Morgan.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-3/exercise4.4
;   Express & Morgan used
===========================================
*/

const express = require("express");
const http = require("http");

let app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.send("API invoked as an HTTP GET request.");
});

app.put("/", function(req, res) {
  res.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(req, res) {
  res.send("API invoked as an HTTP POST request");
});

app.delete("/", function(req, res) {
  res.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});