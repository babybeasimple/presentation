/**
 * Module contains main app object logic. History initialization
 *   and all generic stuff.
 */

var Router = require('./router.js');
var Presentations = require('./models/presentations.js');

/**
 * @arg options.el {$} el App container element
 * @arg options.presentations {Object} json export of presentations from backend
 */
var App = function (options) {
    this.$el = options.el;
    this.presentations = options.presentations;
};

App.prototype = {
    start: function () {
        this.router = new Router({
            el: this.$el,
            presentations: new Presentations.Collection(this.presentations, {parse: true})
        });
        Backbone.history.start();
    }
};

module.exports = App;
