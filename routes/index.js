
'use strict';

const Routes = require('../handlers');

module.exports = [
    {
        method: 'GET',
        path: '/releases',
        handler: Routes.getReleases
    },
    {
        method: 'POST',
        path: '/releases',
        handler: Routes.createRelease
    },
    {
        method: 'GET',
        path: '/releases/{slug}',
        handler: Routes.getRelease
    },
    {
        method: 'PATCH',
        path: '/releases/{slug}',
        handler: Routes.updateRelease
    },
    {
        method: 'DELETE',
        path: '/releases/{slug}',
        handler: Routes.deleteRelease
    },
    {
        method: 'GET',
        path: '/releases/{slug}/{version}',
        handler: Routes.getVersion
    },
    {
        method: 'POST',
        path: '/releases/{slug}/',
        handler: Routes.createVersion
    },
    {
        method: 'PATCH',
        path: '/releases/{slug}/{version}',
        handler: Routes.updateVersion
    },
    {
        method: 'DELETE',
        path: '/releases/{slug}/{version}',
        handler: Routes.deleteVersion
    }
];

