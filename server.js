//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.send("<h1>Hello World!</h1>");
});

app.get("/about", function(req,res){
  res.send("<h1>My Bio</h1>");
});

app.get("/BMI", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/BMI", function(req, res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var result = weight / (height * height);

  res.send("The result of the calculation is " + result);

});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
