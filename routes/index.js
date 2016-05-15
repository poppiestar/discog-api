
'use strict';

var Routes = require('../handlers');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: Routes.home
    }
];

