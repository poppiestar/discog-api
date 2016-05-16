
'use strict';

const Code = require('code');
const Lab = require('lab');

const expect = Code.expect;
const lab = exports.lab = Lab.script();
const test = lab.test;
const before = lab.before;

let server;

before((done) => {

    require('../server')((err, srv) => {

        server = srv;
        done();
    });
});

test('a thing', (done) => {

    server.inject('/', (res) => {

        const response = JSON.parse(res.payload);
        expect(res.statusCode).to.equal(200);
        expect(response).to.deep.equal({ hello: 'there' });
        done();
    });
});

