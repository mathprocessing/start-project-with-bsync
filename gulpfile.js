const gulp = require('gulp')
const browserSync = require('browser-sync').create()

function watchFiles() {
  // Serve files from the root of this project
  browserSync.init({
      server: {
          baseDir: "./public/"
      }
  })

  gulp.watch("public/*.css").on(
    "change", browserSync.reload
  )

  gulp.watch("public/*.js").on(
    "change", browserSync.reload
  )
  
  gulp.watch("public/*.html").on(
    "change", browserSync.reload
  )
}

exports.default = gulp.parallel(watchFiles)