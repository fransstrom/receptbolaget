var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let recipeSchema = new Schema({
    Name:{ type: String, required:true},
    Description: String,
    Ingredients: Array,
    Instruktioner:String,
    IMGUrl:String,
    category:[],
    date: {
        type: Date,
        default: Date.now()
    },
});


module.exports = exports = mongoose.model('recipe', recipeSchema);
