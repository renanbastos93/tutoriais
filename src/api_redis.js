"use strict";

const express = require('express');
const redis = require('redis');
const client = redis.createClient();
const app = express();
const morgan = require('morgan');
const fetch = require('node-fetch');

app.use(morgan('dev'));

app.use('/', (request, response, next) => {
    let key = request.ip;
    let cache = redis.get(key);
    if(cache){
        response.status(200).json(cache);
    }else{
        fetch("https://api.github.com/users/renanbastos93/repos")
        .then(res => res.json)
        .then(data => {
            redis.set(key, data);
            response.status(200).json(data);
        })
        .catch(error => {
            response.status(404).send("Ocorreu algum erro!")
        })
    }
});

app.listen(3000);
