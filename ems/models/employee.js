/*
============================================
; Title: Assignment 7.4 - EMS (Milestone 3 - Mongoose Schema & Model Development)
; File Name: employee.js
; Author: Professor Krasso
; Date: 20 February 2022
; Modified By: Seth Kerrey
; Description:
;   Assignment for milestone 3 to build a mongoose schema & model development.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-7/assignment7.4
;   Express, EJS, Morgan, Body-Parser and Mongoose used
===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({ // Fields below for Employee Schema
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);