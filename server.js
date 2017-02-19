var express=require("express");
var app = express();
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
var route=require('./control/route.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
route(app);

var port=(process.env.PORT || 8080);
console.log('Running on port '+port);

var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/Warshah';
mongoose.connect(mongoURI);
db = mongoose.connection;
db.once('open',function () {
	console.log('mongoDB is open');
});

app.listen(port);
app.use(express.static(__dirname + '/client'));