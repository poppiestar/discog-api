
'use strict';

const Slug = require('slug');
const Boom = require('boom');

exports.getReleases = function (request, reply) {

    const db = request.server.plugins['hapi-mongodb'].db;
    const releases = db.collection('releases');

    releases.find({}).toArray((err, result) => {

        if (err) {
            throw err;
        }

        reply(result);
    });
};

exports.getRelease = function (request, reply) {

    const db = request.server.plugins['hapi-mongodb'].db;
    const releases = db.collection('releases');

    releases.findOne({
        slug: request.params.slug
    }, (err, doc) => {

        if (err) {
            throw err;
        }

        if (!doc) {
            return reply(Boom.notFound());
        }

        return reply(doc);
    });

    /*
    reply({
        name: 'Box Frenzy',
        date: '1987-10-26',
        slug: 'box-frenzy',
        versions: [
            {
                name: 'Box Frenzy',
                date: '1987-10-26',
                slug: 'rtd-64',
                label: 'Rough Trade',
                code: 'RTD 64',
                format: 'LP'
            },
            {
                name: 'Box Frenzy',
                date: '1987-10-26',
                slug: 'chap-cd-18',
                label: 'Chapter 22',
                code: 'CHAP CD 18',
                format: 'CD'
            },
            {
                name: 'Box Frenzy',
                date: '1987-10-26',
                slug: 'rough-us-33c',
                label: 'Rough Trade',
                code: 'ROUGH US 33C',
                format: 'Cassette'
            },
            {
                name: 'Box Frenzy',
                date: '1987-10-26',
                slug: 'rough-us-33',
                label: 'Rough Trade',
                code: 'ROUGH US 33',
                format: 'LP'
            },
            {
                name: 'Box Frenzy',
                date: '1987-10-26',
                slug: 'rough-us-33cd',
                label: 'Rough Trade',
                code: 'ROUGH US 33CD',
                format: 'CD'
            }
        ]
    });
    */
};

exports.createRelease = function (request, reply) {

    const db = request.server.plugins['hapi-mongodb'].db;
    const releases = db.collection('releases');
    const release = request.payload;

    release.slug = Slug(release.name, { lower: true });
    release.date = new Date(release.date);

    releases.save(release, (err, result) => {

        if (err) {
            throw err;
        }

        reply(release);
    });
};

exports.updateRelease = function (request, reply) {

    const db = request.server.plugins['hapi-mongodb'].db;
    const releases = db.collection('releases');
    const release = request.payload;

    release.slug = Slug(release.name, { lower: true });
    release.date = new Date(release.date);

    releases.update({
        slug: release.slug
    }, {
        $set: release
    }, (err, result) => {

        if (err) {
            throw err;
        }

        if (result.n === 0) {
            return reply(Boom.notFound());
        }

        return reply(release);
    });
};

exports.deleteRelease = function (request, reply) {

    const db = request.server.plugins['hapi-mongodb'].db;
    const releases = db.collection('releases');

    releases.remove({
        slug: request.params.slug
    }, (err, doc) => {

        if (err) {
            throw err;
        }

        if (!doc) {
            return reply(Boom.notFound());
        }

        return reply(doc);
    });
};

exports.getReleaseVersion = function (request, reply) {

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
    reply({
        name: 'Box Frenzy',
        date: '1987-10-26',
        slug: 'rough-us-33cd',
        label: 'Rough Trade',
        code: 'ROUGH US 33CD',
        format: 'CD'
    });
};
