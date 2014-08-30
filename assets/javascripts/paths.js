Paths = {
    presentationsPath: function () {
        return '#presentations';
    },

    presentationSlidePath: function (presentationId, id) {
        return '#presentations/' + presentationId + '/slides/' + id;
    }
};

module.exports = Paths;
