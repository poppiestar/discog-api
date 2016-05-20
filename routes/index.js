
'use strict';

const Routes = require('../handlers');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: Routes.home
    },
    {
        method: 'GET',
        path: '/releases',
        handler: Routes.getReleases
    },
    {
        method: 'GET',
        path: '/releases/{slug}',
        handler: Routes.getSingleRelease
    }
];

