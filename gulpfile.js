var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var wiredep = require('gulp-wiredep');
var useref = require('gulp-useref');
var svgSprite = require('gulp-svg-sprites');
var svgmin = require('gulp-svgmin');
var cheerio = require('gulp-cheerio');
var replace = require('gulp-replace');
var filter = require('gulp-filter');
var browserSync = require('browser-sync').create();

var paths = {
    styles: {
        src: 'src/css/**/*.scss',
        dest: 'build/css'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'build/js'
    },
    html: {
        src: 'src/*.html',
        dest: 'build/'
    },
    svg: {
        src: './src/assets/**/*.svg'
    },
    assets: {
        src: './src/assets/**/*.*'
    }
  };
/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var dev = gulp.series(cleanFunction, html, scripts, plugins, userefFunction, min, 
            gulp.parallel(styles, assets, buildSvg, watch, browserSyncFunction));
var build = gulp.series(html, scripts, plugins, userefFunction, min, gulp.parallel(styles, assets, buildSvg))
var htmlPack = gulp.series(html, scripts, plugins, userefFunction, min);
var scriptPack = gulp.series(scripts, plugins, userefFunction, min);
/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('production', build);
gulp.task('default', dev);
gulp.task('assets', assets);
gulp.task('svg', buildSvg);
/*
 * Define default task that can be called by just running `gulp` from cli
 */
  function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scriptPack);
    gulp.watch(paths.html.src, htmlPack);
    gulp.watch(paths.assets.src, assets);
    gulp.watch(paths.svg.src, buildSvg);
    gulp.watch('src/**/*.*').on('change', browserSync.reload);
  }
  function styles(){
    return gulp.src('src/css/{main,about}.scss')
    .pipe(plumber({ // plumber - плагин для отловли ошибок.
        errorHandler: notify.onError(function (err) { // nofity - представление ошибок в удобном для вас виде.
            return {
                title: 'Styles',
                message: err.message
            }
        })
    }))
    .pipe(sourcemaps.init()) //История изменения стилей, которая помогает нам при отладке в devTools.
    .pipe(sass()) //Компиляция sass.
    .pipe(autoprefixer({ //Добавление autoprefixer.
        browsers: ['last 2 versions']
    }))
    .pipe(concat('styles.css')) //Соедение всех файлом стилей в один и задание ему названия 'main.css'.
    .pipe(cssnano()) //Минификация стилей
    .pipe(sourcemaps.write())
    .pipe(rename('main.css')) //Переименование
    .pipe(gulp.dest(paths.styles.dest));
  }
  /* Not all tasks need to use streams, a gulpfile is just another node program
   * and you can use all packages available on npm, but it must return either a
   * Promise, a Stream or take a callback and call it
   */
  function cleanFunction() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return gulp.src('build/',{allowEmpty : true}).pipe(clean());
  }
  function html(){
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest));
}
  /*
   * Define our tasks using plain functions
   */
  function scripts() {
    return gulp.src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dest));
  }
  function plugins(){
    return gulp.src('src/*.html')
        .pipe(wiredep({ //Добавление ссылок на плагины bower.
            directory: 'plugins/bower/'
        }))
        .pipe(gulp.dest('build/'));
  }
  function userefFunction(){
    return gulp.src('build/*.html')
        .pipe(useref()) //Выполняет объединение файлов в один по указанным в разметке html комментариев.
        .pipe(gulp.dest('build/'));
  }
  function min(){
    return gulp.src('build/js/*.js')
    .pipe(uglify()) //Минификация скриптов.
    .pipe(gulp.dest('build/js'));
  }
  function browserSyncFunction(){
    return browserSync.init({
        server: {
            baseDir: './build/'
        }
    });
  }
  function assets(){
    const f = filter(['src/assets/**/*.*','!src/assets/images/icons/**/*']);
    return gulp.src(paths.assets.src).pipe(f)
    .pipe(gulp.dest('build/assets'));
  }
  function buildSvg(){
    return gulp.src('src/assets/images/icons/*.svg')
    // minify svg
    .pipe(svgmin({
        js2svg: {
            pretty: true
        }
    }))
    // remove all fill and style declarations in out shapes
    .pipe(cheerio({
        run: function ($) {
            $('fill').remove();
            $('stroke').remove();
            $('style').remove();
            $('class').remove();
        },
        parserOptions: {
            xmlMode: true
        }
    }))
    // cheerio plugin create unnecessary string '>', so replace it.
    .pipe(replace('&gt;', '>'))
    // build svg sprite
    .pipe(svgSprite({
        mode: "symbols",
        preview: false,
        selector: "icon-%f",
        svg: {
            symbols: 'sprite.svg'
        }
    }))
    .pipe(gulp.dest('./build/assets/images/icons/'));
  }
  /*
   * You can use CommonJS `exports` module notation to declare tasks
   */
//   exports.clean = clean;
//   exports.styles = styles;
//   exports.scripts = scripts;
//   exports.watch = watch;
   