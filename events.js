'use strict';
const request = require('request');
const config = require('./config');
const pg = require('pg');
const apiai = require('apiai');
const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const app = express();
const uuid = require('uuid');
const userData = require('./user');
pg.defaults.ssl = true;

// for api.ai webhooks
/*
app.get('/webhook-apiai/', function (req, res) {
	var sessionID = req.sessionId;
  console.log('API.ai session id :'+sessionID);
	res.status(200);
	res.send("This seems to work :"+sessionID);
	})

  app.get('/webhook-test/', function (req, res) {


  	res.send(sendTextMessage(945859885542482,'This is a test.'););
  	})
*/
// Event caller
/*
  app.get('https://api.api.ai/v1/query', function (req, res) {


  var v = req.param('20150910');
  var e = req.param('1_jour');
  var timezone = req.param('America/Barbados');
  var lang = req.param('fr');
  var sessionId = req.param();

  res.setHeader("Authorization: Bearer "+confi.API_AI_CLIENT_ACCESS_TOKEN);


  	res.status(200);
  	res.send(v+' '+e+' '+timezone+' '+lang);
  	})
*/
