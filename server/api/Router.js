
'use strict';

// Imports
const axios = require('axios');
const RouterExpress = require('express').Router();
const config = require('../config.json');
const api = require('./api');


module.exports = class Router {

    constructor () {
        this.router = RouterExpress;
        this.init();
        this.nasaOpenData();
    }

    getRouter() {
        return this.router;
    }

    init () {
        this.router.use(function timeLog(req, res, next) {
            next();
        });

        this.router.get('/', function (req, res) {
            res.send('Home page');
        });
    };

    nasaOpenData () {

        this.router.get('/potd', (req, res) => {
            api.pictureOfTheDay(null, (err, response) => {
                    if (err) res.send(err.message);
                    else res.send(response.data);
                }
            );
        });

        this.router.get('/potd/:date', (req, res) => {
            api.pictureOfTheDay(req.params.date, (err, response) => {
                    if (err) res.send(err.message);
                    else res.send(response.data);
                }
            );
        })
    };
};
