var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var WeddingSiteData = require('./weddingschema');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/characters', function(req, res) {
    WeddingSiteData.find({}, function(err, weddingsitedata) {
        
    if (err)
        res.status(401).send("Error looking up weddingsitedata");
        
        console.log("WeddingSiteData", weddingsitedata);
        res.send(weddingsitedata);  
  }); 
});


app.listen(5050);