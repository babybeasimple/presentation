var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    browserifyHandlebars = require('browserify-handlebars');

gulp.task('scripts', function() {
    gulp.src('assets/javascripts/bundle.js')
        .pipe(browserify({
            shim: {
                zepto: {
                    path: './node_modules/zepto/zepto.min.js',
                    exports: '$'
                },
                underscore: {
                    path: './node_modules/underscore/underscore.js',
                    exports: '_'
                },
                backbone: {
                    path: './node_modules/backbone/backbone.js',
                    exports: 'Backbone'
                }
            },
            transform : [browserifyHandlebars]
        }))
        .pipe(gulp.dest('./public/javascripts'));
});
