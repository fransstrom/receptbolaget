var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let recipeSchema = new Schema({
    Name: String,
    Description: String,
    Ingredients: [{Ingredient:Object, Amount: Number}],
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




// app.get('/carb', (req, res) => {
//     res.send('hello');
// })

// Recipe.findOne({
//     Name: 'Carbonara'
// }, (err, rec) => {
//     console.log(rec.Ingredients)
// });