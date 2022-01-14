
var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the "views" directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function(req, res){
    res.render("index", {
        "Welcome to the Node.js homepage!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul class="navbar-nav">
        <li class="nav-item active">
            nav-link" href="#">Home
        </li>
        <li class="nav-item"></li>
        <li class="nav-item">
            nav-link" href="#">Contact Us
        </li>
    </ul>
</nav>
<div role="main" class="container">
    <br></br>
    <h2>EJS Views Example</h2>
    div class="row">
    sm-12">

<div class="alert alert-success" role="alert">
    <strong>Message: </strong>  <span><%= message %></span>
</div>
</div>
</div>
</div>