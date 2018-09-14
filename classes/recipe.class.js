var express = require('express');
var app = express();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let recipeSchema = new Schema({
    Name: String,
    Description: String,
    Ingredients: [Array],
    comments: [{
        body: String,
        date: Date
    }],
    date: Date,
    meta: {
        votes: Number,
        favs: Number,
    },
});


module.exports = exports =mongoose.model('recipe', recipeSchema);


// var Carbonarasås = new Recipe({
//     Name: 'Carbonara',
//     Description: 'Helt underbar carbonara',
//     Ingredients: [{
//         Namn: 'massa bacon',
//         halsovarden: 0
//     }, {
//         Namn: 'lök',
//         halsovarden: 100
//     }],
//     comments: [{
//         body: 'jadada',
//         date: '20198'
//     }],
//     date: Date.now(),
//     meta: {
//         votes: 12,
//         favs: 12
//     }
// });


// //Carbonarasås.save();

// app.get('/carb', (req, res) => {
//     res.send('hello');
// })

// Recipe.findOne({
//     Name: 'Carbonara'
// }, (err, rec) => {
//     console.log(rec.Ingredients)
// });