
'use strict';

const Routes = require('../handlers');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: Routes.home
    }
];

