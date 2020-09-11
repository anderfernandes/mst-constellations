const { task, src, pipe, dest } = require('gulp')
const GulpClient = require('gulp')

task('css', () => {
  const postcss = require('gulp-postcss')

  return src('./src/styles/app.css')
    .pipe(postcss([
      require('precss'),
      require('tailwindcss'),
      require('autoprefixer')
    ]))
    .pipe(dest('./public'))
})