var Region = require('./region.js');

// ------------------- views --------------------
var Index = require('./views/presentations/index.js');
var Show = require('./views/presentations/show.js');
// -----------------------------------------------

var Router = Backbone.Router.extend({
    /**
    * @arg options.el {$} el App container element
    * @arg options.presentations [Presentations.Collection]
    */
    initialize: function (options) {
        this.mainRegion = new Region({el: options.el});
        this.presentations = options.presentations;
    },

    routes: {
        '': 'index',
        'presentations': 'index',
        'presentations/:presentation_id/slides/:id': 'show'
    },

// ------------------------ routes ------------------------
    index: function () {
        var view = new Index({collection: this.presentations});
        this.mainRegion.show(view);
    },

    show: function (presentationId, id) {
        var presentation = this.presentations.get(presentationId);
        var model = presentation.get('slides').get(id);
        var view = new Show({model: model, presentation: presentation});
        this.mainRegion.show(view);
    }
// --------------------------------------------------------
});

module.exports = Router;
