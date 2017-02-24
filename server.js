var express = require("express");
var app = express();
var bodyParser=require("body-parser");
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true,limit: '50mb' }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser());
var handlers=require("./handlers.js");
////
app.use(express.static(__dirname + '/client'));




//

var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/Warshah';
mongoose.connect(mongoURI);
// db = mongoose.connection;
// db.once('open',function () {
// 	console.log('mongoDB is open');
// });




app.post('/api/user/signup', handlers.handleUsers.signup);
app.post('/api/user/signin', handlers.handleUsers.signin);
app.get('/api/users', handlers.handleUsers.getUsers);
app.post('/api/insert', handlers.handleservice.addserv);
app.post('/api/edit', handlers.handleservice.editserv);
app.get('/api/insert', handlers.handleservice.showserv);
app.post('/api/delete', handlers.handleservice.deleteserv);


var port=process.env.PORT || 8600;
app.listen(port);
console.log('Running on port '+port);


module.exports = app;