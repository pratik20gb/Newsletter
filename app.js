//jshint esversion: 6


const express = require("express");

const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;

  console.log(firstName, lastName, email);

});

app.listen(8080, function() {
  console.log("server is running on port 8080");

});

//app key
//e350a5efedaf1d9f7a2633f38440c483-us21
