/*
============================================
; Title: Exercise 1.3 - Modules
; File Name: kerrey-exercise1.3.js
; Author: Professor Krasso
; Date: 9 January 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to reference a module.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-1/exercise1.3
===========================================
*/

var url = require("url"); // to import Node specific library

// Variable to hold string value 
var parsedURL = url.parse("https://www.example.com/profile?name=notsmith"); // Parse function to segregate out pieces of URL 

// Functions to call on the URL string
console.log(parsedURL.protocol); // Expected output https:
console.log(parsedURL.host); // Expected output www.example.com
console.log(parsedURL.query); // Expected output name=notsmith