'use strict';


var gulp = require('gulp'),
    bs = require('browser-sync').create();

// gulp.task('jshint', function(){
//   return gulp.src(['./src/scripts/**/*.js'])
//       .pipe(jshint('.jshintrc'))
//       .pipe(jshint.reporter('jshint-stylish'))
//       .pipe(jshint.reporter('fail'));
// });

// gulp.task('inject', function() {
//   return gulp.src('index.html', {cwd: './src'})
//     .pipe(inject(
//       gulp.src(['./src/scripts/**/*.js']).pipe(angularFilesort()), {
//       read: false,
//       ignorePath: '/src'
//     }))
//     .pipe(inject(
//       gulp.src(['./src/stylesheets/**/*.css']), {
//         read: false,
//         ignorePath: '/src'
//       }
//     ))
//     .pipe(gulp.dest('./src'));
// });

// gulp.task('copy', function() {
//   gulp.src('./src/index.html')
//     .pipe(useref())
//     .pipe(gulp.dest('./dist'));

// });

// // Compila las plantillas HTML parciales a JavaScript
// // para ser inyectadas por AngularJS y minificar el código
// gulp.task('templates', function() {
//   gulp.src('./src/templates/**/*.tpl.html')
//     .pipe(templateCache({
//       root: 'templates/',
//       module: 'primivo.templates',
//       standalone: true
//     }))
//     .pipe(gulp.dest('./src/scripts'));
// });

// gulp.task('watch-partials', function () {
//     gulp.watch('./src/templates/**/*.tpl.html', ['templates']);
// });

// gulp.task('wiredep', function(){
//   return gulp.src('./src/index.html')
//   .pipe(wiredep({
//     directory: './src/lib'
//   }))
//   .pipe(gulp.dest('./src'))
// });

// // Comprime los archivos CSS y JS enlazados en el index.html
// // y los minifica.
// gulp.task('compress', function() {
//   gulp.src('./src/index.html')
//     .pipe(useref.assets())
//     .pipe(gulpif('*.js', uglify({mangle: false })))
//     .pipe(gulpif('*.css', minifyCss()))
//     .pipe(gulp.dest('./dist'));
// });

// gulp.task('watch', function(){
//   gulp.watch(['./src/**/*.html', '/src/**/!index.html'], ['html']);
//   gulp.watch(['./src/stylesheets/**/*.css'], ['css', 'inject']);
//   gulp.watch(['./src/scripts/**/*.js', './src/gulpfile.js'], ['jshint', 'inject']);
//   gulp.watch(['./bower.json'], ['wiredep']);
// });

gulp.task('default', ['watch']);
gulp.task('build', ['templates', 'compress', 'copy']);
