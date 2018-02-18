const events = require('events');
const EventEmitter = new events.EventEmitter();

class Comet {
    constructor() {
        this.sessions = [];
        this.topics   = [];
        
        this.listen   = this.listen.bind(this);
    }

    emit(topic, data) {
        console.log('Emit fired with data: ', data);
        EventEmitter.emit(topic, {
            topic,
            data
        });
    }

    listen(req, res, next) {
        let topics = req.body.topics,
            sessionId = req.body.sessionID,
            listener, timeout, timeoutFn;

            console.log('Request body', req.body);

        if (!sessionId) {
            return res.send({'error': 'No session ID'});
        }
        
        if (this.sessions.indexOf(sessionId) === -1) {
            this.sessions.push(sessionId);
        }

        this.registerListeners(topics, function(data) {
            clearTimeout(timeout);
            res.json(data);
        });

        timeout = setTimeout(() => {
            this.removeListeners();
            res.json({'reconnect': true});
        }, 10000);

        // listener = (data) => {
        //     clearTimeout(timeout);
        //     return res.send(data);
        // }

        // EventEmitter.once(topic, listener);

        // timeoutFn = () => {
        //     EventEmitter.removeListener(topic, listener);
        //     res.json({'reconnect': true});
        // };

        // timeout = setTimeout(timeoutFn, 10000);
    }

    registerListeners(topics, callback) {
        topics.forEach((topic) => {
            this.topics.push({
                topic,
                callback
            });

            EventEmitter.once(topic, callback);
        });
    }

    removeListeners() {
        this.topics.forEach((topic) => {
            EventEmitter.removeListener(topic.topic, topic.callback);
        });
    }
}

module.exports = new Comet();