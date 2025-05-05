const path = require('path');

module.exports = {
  entry: path.join(path.resolve(__dirname, 'lib'), 'index.js'),
  output: {
    library: 'goforms',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'goforms.js',
  },
  mode: 'production',
  performance: { hints: false },
};
