const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task("reload", () => {
  browserSync.reload();
});

gulp.task("sync", () => {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });
});

gulp.task("watch", ["sync"], () => {
  gulp.watch("src/*", ["reload"]);
});