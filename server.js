// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/html-routes');
var apiRoutes = require('./app/routing/api-routes');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// For my static files and the CSS to work properly
app.use(express.static(__dirname + '/app/public'));

// Routes
app.use('/', htmlRoutes);
app.use('/survey', htmlRoutes);
app.get('/api/friends', apiRoutes);
app.post('/api/friends', apiRoutes);

// Starts the server to begin listening
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});
