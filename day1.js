
'use strict';
const config = require("./config");
const uuid = require('uuid');
const app = require("./app");

var quick_replies = "ZeKh34suW";

app.sendQuickReply("945859885542482",'This is a test.',quick_replies);
