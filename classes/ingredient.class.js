let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ingredSchema = new Schema({Namn:String}, { collection: 'ingreds' });


module.exports = exports =mongoose.model('ingreds', ingredSchema);
