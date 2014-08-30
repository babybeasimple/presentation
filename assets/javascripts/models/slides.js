var Slides = {};

Slides.Model = Backbone.Model;

Slides.Collection = Backbone.Collection.extend({
    model: Slides.Model,

    previous: function (model) {
        return this.at(this.indexOf(model) - 1);
    },

    next: function (model) {
        return this.at(this.indexOf(model) + 1);
    }
});

module.exports = Slides;
