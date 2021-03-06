
'use strict';

const Server = require('./server');

Server((err, server) => {

    if (err) {
        throw err;
    }
    server.start((err) => {

        if (err) {
            throw err;
        }

        console.log(`Server running at: ${server.info.uri}`);
    });
});

