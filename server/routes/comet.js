var express = require('express');
var router = express.Router();
var Comet = require('../middlewares/comet');

// Comet
router.post('/api/comet', Comet.listen);

module.exports = router;