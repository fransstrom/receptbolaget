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


let RecipesRoute=require('./classes/recipe.class');

app.get('/carbs', (req, res) => {
 

  RecipesRoute.find().
  then(rec => {
    res.send(200, rec)
    next()
})
.catch(err => {
    res.send(500, err)
});

});





var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ingreds');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to mongoose shity fuck')
});


