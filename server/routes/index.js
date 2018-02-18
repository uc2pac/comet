var express = require('express'),
    router = express.Router();

var messages = require('./messages'),
    comet = require('./comet');

router
    .all(['/api/messages', '/api/messages*'], messages)
    .all(['/api/comet', '/api/comet*'], comet);

module.exports = router;