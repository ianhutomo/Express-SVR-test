//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// Hello World & testing page
app.get("/", function(req, res){
  res.send("<h1>Hello World!</h1>");
});

app.get("/about", function(req,res){
  res.send("<h1>My Bio</h1>");
});

//BMI Calculation
/*
app.get("/BMI", function(req,res){
  res.sendFile(__dirname + "/BMI.html");
});

app.post("/BMI", function(req, res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var result = weight / (height * height);

  res.send("The result of the calculation is " + result);

});

*/

//ticker site

app.get("/ticker", function(req, res){
  res.sendFile(__dirname + "/ticker.html");
});

app.post("/", function(req,res){

  var crypto = req.body.crypto;
  var fiat = req.body.fiat;
  var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
  var finalURL = baseURL + crypto + fiat;

  console.log(finalURL);

  request(finalURL, function(error, response, body){

  var data = JSON.parse(body);
  var price = data.last;

  res.write("The current price of " + crypto + " is " + price +  fiat);
  res.send();
  });

});


//starting server to listen to request
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
