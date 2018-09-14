// Require the express module
const express = require("express");
// Create a new web server
const app = express();
// Tell the web server to serve files
// from the www folder
app.use(express.static("www"));
// Start the web server on port 3000
app.listen(3000, () => console.log("Listening on port 3000"));
// Require the built in file system module
const fs = require("fs");


const Ingredient = require('./classes/ingredient.class')

// Read the json livsmedelsdata into ldata
// (convert it from a JSON-string to JS data)
let ldata = require("./json/livsmedelsdata.json");

ingredients = ldata.map(obj => new Ingredient(obj));
//console.log(ingredients, " ", "  ");

let Routes=require('./classes/routes.class');
new Routes(app, ingredients);


// // Retrieve
// var MongoClient = require("mongodb").MongoClient;
// let DBurl = "mongodb://localhost:27017/ingreds";

// Connect to the db
// MongoClient.connect(DBurl, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("ingreds");

//   //Hitta object efter Nummer
//   dbo.collection("ingreds").findOne({Nummer: 2}, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });





// Create a route where we'll return
// the first 5 items from ldata as json
app.get("/first-five", (req, res) => {
  res.json(ldata.slice(0, 5));
});




// Tip:
// Using a JSON-formatter plugin in your
// web-browser makes JSON easier to view:
// https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa