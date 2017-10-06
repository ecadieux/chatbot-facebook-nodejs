
'use strict';
const config = require("./config");
var util = require('util');
// var apiai = require("../module/apiai");
var apiai = require("apiai");
var APIAIsessionID = uuid.v1();
var options = {
    hostname: 'https://api.api.ai/v1/query',
};

var app = apiai(config.API_AI_CLIENT_ACCESS_TOKEN, options);

var event = {
    name: "1_jour",

};

var options = {
    sessionId: APIAIsessionID
};

var request = app.eventRequest(event, options);

request.on('response', function(response) {
    console.log(util.inspect(response, false, null));
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
