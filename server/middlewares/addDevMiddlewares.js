const path = require('path');
const util = require("util");

const { createFsFromVolume, Volume } = require("memfs");
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    publicPath,
    stats: 'errors-only',
  });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(
    compiler,
    webpackConfig.output.publicPath,
  );

  

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = createFsFromVolume(new Volume());
  fs.join = path.join.bind(path);
  const readFile = util.promisify(fs.readFile);

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  app.get("*", async (req, res) => {
    try {
      const file = await readFile(path.join(compiler.outputPath, "index.html"));
      res.send(file.toString());
    } catch (error) {
      res.sendStatus(404);
    }
  });
};

