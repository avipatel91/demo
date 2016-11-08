var express = require('express');
var app = express(); 						// create our app w/ express
var mongoose = require('mongoose'); 				// mongoose for mongodb
var port = process.env.PORT || 8080; 
var database = require('./config/database'); 
var path = require("path");
var bodyParser = require('body-parser');
var reviews = require('./models/reviews')

mongoose.connect(database.localUrl); 


var router = express.Router();

router.use(function(req,res,next){
           
           console.log('Something will happen.');
           next();
     });



// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);