var express = require('express');
var router = express.Router();
var Messages = require('../controllers/messages');

// Posts
router.get('/api/messages', Messages.get)
      .get('/api/messages/:id', Messages.getOne)
      .post('/api/messages', Messages.create)
      .put('/api/messages/:id', Messages.update);

module.exports = router;