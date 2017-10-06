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
pg.defaults.ssl = true;


mainApp.sendTextMessage(945859885542482,'This is a test for schedule day one.');
console.log("Sending scheduled message");
