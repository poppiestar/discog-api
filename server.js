
'use strict';

const Hapi = require('hapi');

module.exports = function (callback) {

    const server = new Hapi.Server();
    server.connection({ port: 4000 });

    server.route(require('./routes'));

    callback(null, server);
};

