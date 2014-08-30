var Region = function (options) { this.el = options.el; };

Region.prototype = {
    show: function (view) {
        this.currentView && this.currentView.remove();
        this.currentView = view;
        this.el.empty();
        this.el.append(this.currentView.render().el);
        this.currentView.trigger('show');
    }
};

module.exports = Region;
