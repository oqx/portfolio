require('angular');

var app = require('angular').module('app', [require('angular-route')])
.config(require('./routes'));
require('./controllers/');
require('./services/');
require('./directives/');
require('./custom-elements/');
