import {join} from 'path';
import gulp from 'gulp';
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
  if(err) throw new Error(err);

  if(argv.dev) {
    console.log('Listening at localhost:3000');
  } else {
    console.log(stats.toString());
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
