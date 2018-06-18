var gulp      = require('gulp'),
    jade      = require('gulp-pug'),
    less      = require('gulp-less'),
    path      = require('path'),
    marked    = require('marked'), // For :markdown filter in jade
    htmlhint  = require('gulp-htmlhint');


// SOURCES CONFIG
var source = {
  templates: {
    app: {
      files: ['demo/pug/index.pug'],
      watch: ['demo/pug/*.pug']
    }
  },
  styles: {
    app: {
      main: ['yamm/yamm.less'],
      dir: 'yamm',
      watch: ['yamm/yamm.less']
    }
  }
};

// BUILD TARGET CONFIG
var build = {
  styles: './yamm',
  templats: {
    app: './'
  }
};

// ERROR HANDLER
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

//---------------
// TASKS
//---------------

// Compile LESS into a path described and handle any errors if there are errors.
gulp.task('yamm', function() {
    return gulp.src(source.styles.app.main)
        .pipe(less({
            paths: [source.styles.app.dir]
    }))
    .on("error", handleError)//handle our error function
    .pipe(gulp.dest(build.styles));
});

//PUG compile our pug templates and make it clean it up, display errors w/ handleError mfunc
//pipe in htmlhint and store in build dist folder.
gulp.task('templates', function() {
    return gulp.src(source.templates.app.files)
        .pipe(pug({
            pretty: true
    }))
    .on("error", handleError)
    .pipe(htmlhint())// validate our pug templates
    .pipe(htmlhint.reporter())//report our validation
    .pipe(gulp.dest(build.templates.app)); // build in dist folder
});


//---------------
// WATCH
//---------------

// Watch for file changes
gulp.task('watch:demo', function() {
    gulp.watch(source.tempaltes.app.watch,      ['templates']);//watch pug templates for changes
});

gulp.task('watch:yamm', function() {
    gulp.watch(source.styles.app.watch,     ['yamm']);//watch changes in the yamm dir
});


//---------------
// DEFAULT TASK
//---------------

gulp.task('default', [
          'yamm',
          'watch:yamm'
        ]);

//---------------
// DEMO TASK
//---------------

gulp.task('demo', [
          'yamm',
          'templates',
          'watch:yamm',
          'watch:demo'
        ]);
