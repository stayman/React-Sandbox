import {join} from 'path';
import gulp from 'gulp';
import gutil, {PluginError} from 'gulp-util';
import {argv} from 'yargs';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

var entryConfig = config;
var devEntry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/dev-server'
];

if(argv.dev) {
  entryConfig.entry.push.apply(entryConfig.entry, devEntry);
  entryConfig.devtool = 'inline-source-map';
}

const compiler = webpack(entryConfig);
const logger = (err, stats) => {
  if(err) throw new PluginError('webpack-dev-server', err);

  if(argv.dev) {
    gutil.log('[webpack-dev-server]', 'http://localhost:3000/webpack-dev-server/');
  } else {
    gutil.log(stats.toString());
  }
};

gulp.task('default', ['copy'], () => {
  if(argv.dev) {
    new WebpackDevServer(compiler, {
      contentBase: join(process.cwd(), 'dist'),
      publicPath: config.output.publicPath,
      hot: true,
      quiet: false,
      noInfo: false,
      watchDelay: 300,
      headers: { 'X-Custom-Header': 'yes' },
      stats: { colors: true }
    }).listen(3000, 'localhost', logger);
  } else {
    compiler.run(logger);
  }
});

gulp.task('copy', () => {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', () => {
  gulp.watch('./src/*.html', ['copy']);
});
