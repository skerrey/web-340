/*
============================================
; Title: Exercise 7.2 - TDD in Action
; File Name: kerrey-exercise7.2.js
; Author: Professor Krasso
; Date: 20 February 2022
; Modified By: Seth Kerrey
; Description:
;   Exercise to understand TDD in action.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-7/exercise7.2
;   Mocha and Chai used
===========================================
*/

var assert = require("assert");
describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray("Apple,Orange,Mango".split(",")));
    });
});
