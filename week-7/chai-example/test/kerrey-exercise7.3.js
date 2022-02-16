/*
============================================
; Title: Exercise 7.3 - Mocha and Chai
; File Name: kerrey-exercise7.3.js
; Author: Professor Krasso
; Date: 20 February 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to understand a Chai test
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-7/exercise7.3
;   Mocha and Chai used
===========================================
*/

var fruits = require("../kerrey-fruits"); // For testing
var chai = require("chai"); // To use Chai
var assert = chai.assert;

describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits("Apple,Orange,Mango");
        assert(Array.isArray(f));
    });
});
