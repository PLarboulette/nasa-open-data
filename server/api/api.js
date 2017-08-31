

const axios = require('axios');
const potdUrl = 'https://api.nasa.gov/planetary/apod';
const config = require('../config.json');

exports.pictureOfTheDay = (date, callback) => {

    if (date) {
        axios.get(`${potdUrl}?api_key=${config.api_key}&date=${date}`)
            .then( data => callback(null, data))
            .catch(err => callback(err))
    } else {
        axios.get(`${potdUrl}?api_key=${config.api_key}`)
            .then( data => callback(null, data))
            .catch(err => callback(err))
    }
};

