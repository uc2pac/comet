var express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    mongoose = require('mongoose');

var app = express();

// DB
mongoose.connect('mongodb://localhost/comet');

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

// Middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get('Origin') || '*');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-XSRF-TOKEN");
    // Required for Angular Http 2.1
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
    next();
});

// Routes
app.use(routes);

app.listen(3333, function() {
    console.log('Application is running on port 3333');
});