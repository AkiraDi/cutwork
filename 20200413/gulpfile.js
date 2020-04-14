var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');


// gulp.task('test', function () {
//     console.log(11111)
// });
gulp.task('js',function(){
    return gulp.src('src/js/**/*.js')
    .pipe(concat('index.js'))//合并为什么文件名
    .pipe(gulp.dest('dist/js/'))//输出文件目录
    .pipe(uglify())//压缩文件
    .pipe(rename({suffix:'.min'}))//重命名
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('css',function(){
    return gulp.src('src/css/**/*.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css/'))
});

// gulp.task('defult',[])