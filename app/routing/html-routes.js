//Dependencies
var express = require('express');
var routes = express.Router();
var path = require('path');
var apiRoutes = require('./../routing/api-routes.js');

// HTML Routes
routes.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/../public/home.html'));
});

routes.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

module.exports = routes;
