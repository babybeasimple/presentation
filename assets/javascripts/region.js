var Region = function (options) { this.el = options.el; };

Region.prototype = {

    /**
     * Clean up old view and render new one.
     * After new view is placed into DOM 'show' event gets triggered on it.
     * @arg {Backbone.View} View to be rendered into container element.
     */
    show: function (view) {
        this.currentView && this.currentView.remove();
        this.currentView = view;
        this.el.empty();
        this.el.append(this.currentView.render().el);
        this.currentView.trigger('show');
    }
};

module.exports = Region;
