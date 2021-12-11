const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));//sass=>css
const minifyCSS = require('gulp-minify-css');//压缩css代码

gulp.task('sass', async function(){
    return gulp.src('components/css/**/*.scss')
        .pipe(sass()) //转成css
        .pipe(minifyCSS()) // 压缩css
        .pipe(gulp.dest('dist/css')) //放到dist的css文件夹里
})

