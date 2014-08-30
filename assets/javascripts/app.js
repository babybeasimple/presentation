var Router = require('./router.js');
var Presentations = require('./models/presentations.js');

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
