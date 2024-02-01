import gulp from 'gulp'
import gulpReplace from 'gulp-replace'

gulp.task('replacePath', () => {
  return gulp.src('/vercel/path0/.vercel/output/static/index.html')
    .pipe(gulpReplace(/\/_nuxt\/([a-zA-Z0-9_.-]+)\b/g, 'https://pcs-nuxt3-v2.vercel.app/_nuxt/$1'))
    .pipe(gulp.dest('/vercel/path0/.vercel/output/static'))

  // return gulp.src('.output/public/index.html')
  //   .pipe(gulpReplace(/\/_nuxt\/([a-zA-Z0-9_.-]+)\b/g, 'https://pcs-nuxt3-app-ahzv.vercel.app/_nuxt/$1'))
  //   .pipe(gulp.dest('.output/public'))
})
