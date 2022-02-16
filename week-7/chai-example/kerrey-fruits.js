/*
============================================
; Title: Exercise 7.3 - Mocha and Chai
; File Name: kerrey-fruits.js
; Author: Professor Krasso
; Date: 20 February 2022
; Modified By: Seth Kerrey
; Description:
;   Function used in a Chai test.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-7/exercise7.3
;   Mocha and Chai used
===========================================
*/

function getFruits(str) {
    return str.split(",");
}

module.exports = getFruits;