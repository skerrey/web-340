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

var url = require("url");

var parsedURL = url.parse("https://www.example.com/profile?name=notsmith");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);