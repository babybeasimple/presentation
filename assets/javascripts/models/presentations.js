var Slides = require('./slides.js');

var Presentations = {};

Presentations.Model = Backbone.Model.extend({
    parse: function (response) {
        response.slides = new Slides.Collection(response.slides, {parse: true});
        return response;
    }
});

Presentations.Collection = Backbone.Collection.extend({
    model: Presentations.Model
});

module.exports = Presentations;
