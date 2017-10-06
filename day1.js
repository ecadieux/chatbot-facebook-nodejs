
'use strict';
const config = require("./config");
const uuid = require('uuid');
const mainApp = require("./app");

var quick_replies = "ZeKh34suW";

mainApp.sendQuickReply("945859885542482",'This is a test.',quick_replies);
