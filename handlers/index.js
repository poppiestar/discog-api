
'use strict';

exports.home = function (request, reply) {

    reply({ hello: 'there' });
};

exports.getReleases = function (request, reply) {

/*
    const db = request.server.plugins['hapi-mongodb'].db;
    const releases = db.collection('releases');

    releases.find({}).toArray((err, result) => {

        if (err) {
            throw err;
        }

        reply(result);
    });
    */
    reply([
        {
            name: 'Box Frenzy',
            date: '1987-10-26',
            slug: 'box-frenzy'
        },
        {
            name: 'Now For a Feast',
            date: '1988-12-12',
            slug: 'now-for-a-feast'
        }
    ]);
};

exports.getSingleRelease = function (request, reply) {
    reply({
        name: 'Box Frenzy',
        date: '1987-10-26',
        slug: 'box-frenzy'
    });
};

