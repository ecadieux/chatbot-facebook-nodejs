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

app.get('/webhook-apiai/', function (req, res) {
	console.log("request");


	res.status(200);
	res.send("This seems to work");
	})
