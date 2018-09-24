var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let recipeSchema = new Schema({
    Name:{ type: String, required:true},
    Description: String,
    Ingredients: Array,
    Instruktioner:String,
    IMGUrl:String,
    date: {
        type: Date,
        default: Date.now()
    },
});


module.exports = exports = mongoose.model('recipe', recipeSchema);

//  var Köttbullar = new Recipe({
//      Name: 'Köttbullar',
//      Description: 'Hemmalagade',
//      Ingredients: [{
//          Namn: 'Köttfärs',
//          halsovarden: 500
//      }, {
//          Namn: 'lök',
//          halsovarden: 100
//      },{
//          Namn:'Tomat',
//          halsovarden:1000
//      }],
//      IMGUrl:'https://goo.gl/images/z1tbYf'
//  });
