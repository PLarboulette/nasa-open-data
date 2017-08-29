
'use strict';

// Imports
const RouterExpress = require('express').Router();


module.exports = class Router {

    constructor () {
        this.router = RouterExpress;
        this.init();
        this.nasaOpenData();
    }

    getRouter () {
        return this.router;
    };

    init () {
        this.router.use(function timeLog(req, res, next) {
            next();
        });

        this.router.get('/', function (req, res) {
            res.send('Home page');
        });
    };

    nasaOpenData () {
        this.router.get('/potd', function (req, res) {
            console.log('Picture of the day !');
            console.log('Not implemented yet');
            res.send('Home page');
        });
    };
};
