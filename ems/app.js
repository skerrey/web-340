/*
============================================
; Title: Assignment 5.4 - EMS (Milestone 1)
; File Name: app.js
; Author: Professor Krasso
; Date: 13 February 2022
; Modified By: Seth Kerrey
; Description:
;   Assignment for milestone 1 to build a node app.
; Resources:
;   Code was provided by Prof Krasso in WEB 340/week-5/assignment5.4
;   Express, EJS, Morgan, and Body-Parser used
===========================================
*/

// Require statements ---------------------------------------------------------
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose"); 
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var Employee = require("./models/employee"); // Import employee library

// mLab connection string, Mongoose connection code, employee model ---------------
// Database connection
var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1.ixkw5.mongodb.net/test"; 
mongoose.connect(mongoDB);

// Mongoose Promise
mongoose.Promise = global.Promise;
var db = mongoose.connection; // Database variable to hold connection
db.on("error", console.error.bind(console, "MongoDB connection error: ")); // Error handling
db.once("open", function() {
    console.log("application connected to mLab: MongoDB Atlas Cluster"); // Connected message
});

// Setup csrf protection ---------------------------------------------------------
var csrfProtection = csrf({cookie: true});

// App functions --------------------------------------------------------------
var app = express(); // Placeholder for Express app
app.set("views", path.resolve(__dirname, "views")); // Directory 
app.set("view engine", "ejs"); // Views

// Use statements -------------------------------------------------------------
app.use(logger("short")); // Logger
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) { // Intercepts all incoming requests and adds a CSRF token to the response.
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});

// Pages: home, new, list, view -------------------------------------------------
app.get("/", function (req, res) { // index.ejs
    res.render("index", {
        title: "Home page",
        message: "XSS Prevention Example"
    });
});

app.get("/new", function (req, res) { // new.ejs
    res.render("new", {
        title: "Data Entry Page"
    });
});

app.get("/list", function(req, res) { // list.ejs
    Employee.find({}, function(error, employees) {
        if (error) {
            console.log(error);
            throw error;
        } else {
            console.log(employees);
            res.render("list", {
                title: "Employee List",
                employees: employees
            });
        }
    });
});

app.get("/view/:queryName", function(req, res) { // view.ejs
    var queryName = req.params.queryName;
  
    Employee.find({"firstName": queryName}, function(error, employees) {
        if (error) throw error;
        console.log(employees);
        if (employees.length > 0) {
            res.render("view", {
            title: "Employee Records",
            employee: employees
            })
            } else {
                res.redirect('/list');
            }
    });
});



// Process form submission
app.post('/process', function(req, res) {
    if (!req.body.txtFirstName || !req.body.txtLastName) {
        res.status(400).send('Entries must have a name');
        return;
    }
  
    // Get the request's form data
    var employeeFirstName = req.body.txtFirstName;
    var employeeLastName = req.body.txtLastName;
    console.log("First name: " + employeeFirstName + " Last name: " + employeeLastName);
  
    // Create a employee model
    var employee = new Employee({
        firstName: employeeFirstName,
        lastName: employeeLastName
    });
  
    // save
    employee.save(function(err) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            console.log(employeeFirstName + " " + employeeLastName + " saved successfully!");
            res.redirect('/');
        }
    });
});

app.get('/employees/delete/:id', function(req, res) {
    const employeeId = req.params.id; 
    Employee.findByIdAndDelete({'_id': employeeId}, function(err, employees) {
        if (err) {
            console.log(err);
            throw err;
        }
        else {
            console.log(employees);
            res.redirect('/');
      }
    })
  })

// Initialize server -------------------------------------------------------------
http.createServer(app).listen(8080, function() {
    console.log("Application started on port %s", 8080);
});