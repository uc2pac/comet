var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    text: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', schema);