var $ = require('zepto');
var _ = require('underscore');
var Backbone = require('backbone');
var db = require('./db.js');
var App = require('./app.js');

this.App = new App({
    el: $('.l-main'),
    presentations: db
});

$(this.App.start.bind(this.App));
