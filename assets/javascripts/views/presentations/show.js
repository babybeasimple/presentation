var paths = require('../../paths.js');
var presentationsPath = paths.presentationsPath;
var presentationSlidePath = paths.presentationSlidePath;

var Show = Backbone.View.extend({
    template: require('../../templates/presentations/show.handlebars'),

    initialize: function (options) {
        this.presentation = options.presentation;
        this.collection = this.presentation.get('slides');
    },

    events: {
        'click img': 'navigateNext',
    },

    render: function () {
        this.$el.html(this.template(_.extend(this.model.toJSON(), this.templateHelpers())));
        return this;
    },

    nextSlidePath: function () {
        if (!this.isLast()) {
            return presentationSlidePath(this.presentation.id, this.collection.next(this.model).id);
        }
    },

    previousSlidePath: function () {
        if (!this.isFirst()) {
            return presentationSlidePath(this.presentation.id, this.collection.previous(this.model).id);
        }
    },

    isFirst: function () {
        return this.model == this.collection.first();
    },

    isLast: function () {
        return this.model == this.collection.last();
    },

    navigateNext: function () {
        if (!this.isLast()) {
            Backbone.history.navigate(this.nextSlidePath(), {trigger: true});
        }
    },

    templateHelpers: function () {
        return {
            presentationsPath: presentationsPath(),
            nextSlidePath: this.nextSlidePath(),
            previousSlidePath: this.previousSlidePath(),
            isNotFirst: !this.isFirst(),
            isNotLast: !this.isLast()
        };
    }

});

module.exports = Show;
