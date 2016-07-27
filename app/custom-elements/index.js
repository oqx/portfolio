'use strict';

var app = require('angular').module('app');

app.directive('terminal', require('./terminal'));
app.directive('loading', require('./loading-icon'));

//svg img
app.directive('profile', require('./img/profile'));
app.directive('leadpages', require('./img/leadpages'));
app.directive('center', require('./img/center'));

//svg tool img
app.directive('npm', require('./img/tools/npm'));
app.directive('aurelia', require('./img/tools/aurelia'));
app.directive('bitbucket', require('./img/tools/bitbucket'));
app.directive('git', require('./img/tools/git'));
app.directive('es6', require('./img/tools/es6'));
app.directive('webpack', require('./img/tools/webpack'));
app.directive('sass', require('./img/tools/sass'));
app.directive('jenkins', require('./img/tools/jenkins'));
