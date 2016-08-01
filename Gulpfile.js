'use strict';


var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    stylus    = require('gulp-stylus'),
    nib       = require('nib'),
    jshint    = require('gulp-jshint'),
    stylish   = require('jshint-stylish'),
    inject    = require('gulp-inject'),
    wiredep   = require('wiredep').stream,
    gulpif    = require('gulp-if'),
    useref    = require('gulp-useref'),
    uglify    = require('gulp-uglify'),
    uncss     = require('gulp-uncss'),
    concat    = require('gulp-concat'),
    nano      = require('gulp-cssnano'),
    cleanCSS  = require('gulp-clean-css'),
    rev       = require('gulp-rev'),
    minify    = require('gulp-minify'),
    del       = require('del'),
    angularFilesort = require('gulp-angular-filesort'),
    templateCache = require('gulp-angular-templatecache'),
    reload      = browserSync.reload;

// Servidor 
gulp.task('serve', function() {

    browserSync.init({
        server: "./app",
        port: 8080
    });


    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Busca en las carpetas de estilos y javascript los archivos
// para inyectarlos en el index.html
gulp.task('inject', function() {
  return gulp.src('index.html', {cwd: './app'})
    .pipe(inject(
      gulp.src(['./app/scripts/**/*.js']).pipe(angularFilesort()), {
      ignorePath: '/app'
    }))
    .pipe(inject(
      gulp.src(['./app/stylesheets/**/*.css']), {
        ignorePath: '/app'
      }
    ))
    .pipe(gulp.dest('./app'));
});

// Inyecta las librerias que instalemos vía Bower
gulp.task('wiredep', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({ }))
    .pipe(gulp.dest('./app'));
});

// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
  return gulp.src('./app/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// Preprocesa archivos Stylus a CSS y recarga los cambios
gulp.task('css', function() {
  gulp.src('./app/stylesheets/*')
    .pipe(stylus({ use: nib() }))
    .pipe(gulp.dest('./app/stylesheets'))
    .pipe(reload({stream: true}));
});

// Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function() {
  gulp.src('./app/**/*.html')
      .pipe(reload({stream: true}));
});
// Compila las plantillas HTML parciales a JavaScript
// para ser inyectadas por AngularJS y minificar el código
gulp.task('templates', function() {
  gulp.src('./app/templates/**/*.tpl.html')
    .pipe(templateCache({
      root: 'templates/',
      module: 'ciidept.templates',
      standalone: true
    }))
    .pipe(gulp.dest('./app/scripts'));
});
gulp.task('watch', function() {
  gulp.watch(['./app/**/*.html'], ['html','templates']);
  gulp.watch(['./app/stylesheets/**/*'], ['css', 'inject']);
   gulp.watch(['./app/scripts/**/*.js', './Gulpfile.js'], ['inject']);
  gulp.watch(['./bower.json'], ['wiredep']);
});

//tarea por defecto
gulp.task('default', ['serve','jshint','css','watch','inject','templates','wiredep']);

/***************************PRODUCCION***********************************************/

// Servidor 
gulp.task('serve:dist', function() {

    browserSync.init({
        server: "./dist",
        port: 3030
    });


    gulp.watch("dist/*.html").on('change', browserSync.reload);
});
// Comprime los archivos CSS y JS enlazados en el index.html
// y los minifica.
gulp.task('compress', function() {
  return gulp.src('./app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify({mangle: false })))
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(gulp.dest('./dist'));
});
// Elimina el CSS que no es utilizado para reducir el peso del archivo
gulp.task('uncss', function() {
  gulp.src('./dist/css/style.min.css')
    .pipe(uncss({
      html: ['./app/index.html','./app/templates/**/*.html']
    }))
    .pipe(gulp.dest('./dist/css'));
});

// Copia el contenido de los estáticos e index.html al directorio
// de producción sin tags de comentarios
gulp.task('copy', function() {
 gulp.src('./app/index.html')
        .pipe(gulp.dest('./dist'));
  gulp.src('./app/img/*')
    .pipe(gulp.dest('./dist/img'));
  gulp.src('./app/lib/fontawesome/fonts/**')
    .pipe(gulp.dest('./dist/fonts'));
  gulp.src('./app/lib/areas-icon/**')
    .pipe(gulp.dest('./dist/css'));  
  gulp.src('./app/lib/angular-i18n/angular-locale_es-ar.js/**')
    .pipe(gulp.dest('./dist/js'));
    gulp.src('./app/stylesheets/fonts/**')
    .pipe(gulp.dest('./dist/css/fonts'));    
   gulp.src('./app/lib/bootstrap/fonts/**')
    .pipe(gulp.dest('./dist/fonts'));  
     gulp.src('./app/lib/bootstrap-material-design/fonts/**')
    .pipe(gulp.dest('./dist/fonts'));  
  
});

gulp.task('build', ['templates','compress', 'uncss','copy']);

