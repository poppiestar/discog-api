
'use strict';

const Hapi = require('hapi');

module.exports = function (callback) {

    const server = new Hapi.Server();
    server.connection({ port: 4000 });

    server.route(require('./routes'));

    server.register({
        register: require('hapi-mongodb'),
        options: {
            url: 'mongodb://localhost:27017/app',
        }
    }, function (err) {

        if (err) {
            throw err;
        }

        callback(null, server);
    });

};

