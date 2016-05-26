
'use strict';

const Slug = require('slug');
const Boom = require('boom');
const _ = require('lodash');

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

exports.getVersion = function (request, reply) {

    const db = request.server.plugins['hapi-mongodb'].db;
    const releases = db.collection('releases');

	releases.findOne({
	    slug: request.params.slug,
        "versions.slug": request.params.version	
	}, (err, result) => {

        if (err) {
            throw err;
        }

        result.version = _.find(result.versions, { slug: request.params.version });

        reply(result);
    });
};

exports.createVersion = function (request, reply) {

    const db = request.server.plugins['hapi-mongodb'].db;
    const releases = db.collection('releases');
    const version = request.payload;

    console.log('create version');
    version.slug = Slug(version.code, { lower: true });
    version.date = new Date(version.date);
    console.log(version);

    releases.update({ slug: request.params.slug },
        { $addToSet: { versions: version } },
        (err, result) => {

        if (err) {
            throw err;
        }

        reply(version);
    });
};

exports.updateVersion = function (request, reply) {

    const db = request.server.plugins['hapi-mongodb'].db;
    const releases = db.collection('releases');
    const version = request.payload;

    version.slug = Slug(version.code, { lower: true });
    version.date = new Date(version.date);

    releases.update({
        slug: request.params.slug,
        "versions.slug" : request.params.version
    },
    {
        $set: { "versions.$": version } 
    }, (err, result) => {

        if (err) {
            throw err;
        }

        reply(version);
    });
};

exports.deleteVersion = function (request, reply) {

    const db = request.server.plugins['hapi-mongodb'].db;
    const releases = db.collection('releases');

    releases.update({
        slug: request.params.slug,
        "versions.slug": request.params.version
    },
    {
        $pull: { versions: { slug: request.params.version } }
    }, (err, result) => {

        if (err) {
            throw err;
        }

        reply(version);
    });
};

