let gulp = require('gulp')
let uglify = require('gulp-uglify')
let rename = require('gulp-rename')

let relPath = {
    npm: './node_modules',
    pub: './public',
    img: './assets/images/*',
    css: './assets/css/*',
    mainjs: './assets/js/main.js',
    mainjscn: './assets/js/main.cn.js'
};

gulp.task('bootcss', function() {
    return gulp.src([relPath.npm, 'bootstrap/dist/css/bootstrap.min.css'].join('/'))
    .pipe(gulp.dest([relPath.pub, 'css'].join('/')))
})

gulp.task('vue', function() {
    return gulp.src([relPath.npm, 'vue/dist/vue.min.js'].join('/'))
    .pipe(gulp.dest([relPath.pub, 'js'].join('/')))
})

gulp.task('img', function() {
    return gulp.src(relPath.img).pipe(gulp.dest([relPath.pub, 'img'].join('/')))
})

gulp.task('maincss', function() {
    return gulp.src(relPath.css).pipe(gulp.dest([relPath.pub, 'css'].join('/')))
})

gulp.task('mainjs', function() {
    return gulp.src(relPath.mainjs)
    .pipe(uglify({mangle: true}))
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest([relPath.pub, 'js'].join('/')))
})

gulp.task('mainjs-cn', function() {
    return gulp.src(relPath.mainjscn)
    .pipe(uglify({mangle: true}))
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest([relPath.pub, 'js'].join('/')))
})

// gulp.task('build', ['bootcss', 'vue', 'img', 'maincss', 'mainjs', 'mainjs-cn'])
gulp.task('build', gulp.series('bootcss', 'vue', 'img', 'maincss', 'mainjs', 'mainjs-cn'));