
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
        method: 'POST',
        path: '/releases',
        handler: Routes.postRelease
    },
    {
        method: 'GET',
        path: '/releases/{slug}',
        handler: Routes.getRelease
    },
    {
        method: 'GET',
        path: '/releases/{slug}/{version}',
        handler: Routes.getReleaseVersion
    }
];

