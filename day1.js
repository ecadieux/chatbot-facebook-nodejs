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
const mainApp = require('./app');
var util = require('util');

pg.defaults.ssl = true;


mainApp.sendTextMessage(945859885542482,'This is a test for schedule day one.');
console.log("Sending scheduled message");


var APIAIsessionID = uuid.v1();

var options = {
    hostname: 'https://api.api.ai/v1/query',
};

var app = apiai(config.API_AI_CLIENT_ACCESS_TOKEN, options);

var event = {
    name: "1_jour",
    data: {
        param1: "",
    }
};

var options = {
    sessionId: 'APIAIsessionID'
};

var request = app.eventRequest(event, options);

request.on('response', function(response) {
    console.log(util.inspect(response, false, null));
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
