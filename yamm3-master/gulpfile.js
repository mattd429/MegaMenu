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
