
'use strict';

const Code = require('code');
const Lab = require('lab');

const expect = Code.expect;
const lab = exports.lab = Lab.script();

let server;

lab.before((done) => {

    require('../server')((err, srv) => {

        if (err) {
            throw err;
        }

        server = srv;
        done();
    });
});

lab.experiment('releases', () => {

    lab.test('retrieving no releases', (done) => {

        server.inject('/releases', (res) => {

            const response = JSON.parse(res.payload);
            expect(res.statusCode).to.equal(200);
            expect(response).to.deep.equal({ releases: [] });
            done();
        });
    });
});

