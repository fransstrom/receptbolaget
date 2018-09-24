// Require the express module
const express = require("express");
// Create a new web server
const app = express();
// Tell the web server to serve files
// from the www folder
app.use(express.static("www"));
app.use(function(req,res,next){
res.header('Access-Control-Allow-Origin','*');
res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers','Content-Type');
next();
})
// Start the web server on port 3000
app.listen(3000, () => console.log("Listening on port 3000"));
// Require the built in file system module
var http = require('http');
const fs = require("fs");



var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ingreds', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('connected with mongoose')
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let Routes = require('./classes/routes.class');
new Routes(app);


//Generating the admin page
app.get('/admin', (req,response)=>{
  fs.readFile('./www/admin.html', function(error, data) {  
    if (error) {  
        response.writeHead(404);  
        response.write(error);  
        response.end();  
    } else {  
        response.writeHead(200, {  
            'Content-Type': 'text/html'  
        });  
        response.write(data);  
        response.end();  
    }  
});  
})