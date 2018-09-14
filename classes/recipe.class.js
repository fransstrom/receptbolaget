var express=require('express');
var route=express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/ingreds');

  let recipeSchema = new Schema({
  Name:  String,
  Description: String,
  Ingredients:   [Array],
  comments: [{ body: String, date: Date }],
  date: Date,
  meta: {
    votes: Number,
    favs:  Number,
  },
});

let Recipe = mongoose.model('recipe', recipeSchema);

var Carbonarasås = new Recipe({ Name:  'Carbonara',
    Description: 'Helt underbar carbonara',
    Ingredients:   [{Namn:'massa bacon', halsovarden:0}, {Namn:'lök', halsovarden:100}],
    comments: [{ body: 'jadada', date: '20198' }],
    date: Date.now(),
    meta: {
      votes: 12,
      favs:  12 }});


Recipe.findOne({Name:'Carbonara'},(err, rec)=>{console.log(rec.Ingredients)});



