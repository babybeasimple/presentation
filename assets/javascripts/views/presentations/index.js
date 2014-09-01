var presentationSlidePath = require('../../paths.js').presentationSlidePath;
var presentationTemplate = require('../../templates/presentations/presentation.handlebars');

var Index = Backbone.View.extend({
    tagName: 'ul',

    /**
    * @arg options.collection [Presentations.Collection]
    */
    initialize: function (options) {
        this.collection = options.collection;
    },

    render: function () {
        var _this = this;
        this.collection.each(function (model) {
            _this.$el.append(_this.renderPresentation(model));
        });
        return this;
    },

    renderPresentation: function (model) {
        return presentationTemplate({
            name: model.get('name'),
            url: presentationSlidePath(model.id, model.get('slides').first().id)
        });
    }
});

module.exports = Index;
