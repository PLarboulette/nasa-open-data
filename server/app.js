
'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').Server(app);
const Router = require("./api/Router");


app.set('port', 3000);
app.use(session({ resave: true, saveUninitialized: true, secret: 'unicorn' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));
app.use('/api', new Router().getRouter());


http.listen(app.get('port'), function(){
    console.log("INFO = [Listening on port "+app.get('port')+"]");
});



