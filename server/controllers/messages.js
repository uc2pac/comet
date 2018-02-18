var Message = require('../models/message');
var Comet = require('../middlewares/comet');

var count = 0;

function get(req, res) {
    Message.find(function(err, messages) {
        if (err) throw err;
        count ++;
        Comet.emit('counter', count);

        res.json(messages);
    });
}

function getOne(req, res) {
    // var params = req.params.id;

    // Post.find({'_id': params}, function(err, post) {
    //     if (err) throw err;

    //     res.json(post);
    // });
}

function create(req, res, next) {
    var body = req.body;

    // TODO: implement validation and logging

    var newMessage = Message(body);


    newMessage.save(function(err, message) {
        if (err) throw err;

        Comet.emit('messages', message);

        res.json(message);
    });
}

function update(req, res) {
    // var id = req.params.id,
    //     updateObj = {
    //         title: req.body.title,
    //         content: req.body.content
    //     };
    
    // Post.findByIdAndUpdate(id, updateObj, {new: true}, function(err, post) {
    //     if (err) throw err;
        
    //     res.json(post);
    // });
}

module.exports = {
    get: get,
    getOne: getOne,
    create: create,
    update: update
};