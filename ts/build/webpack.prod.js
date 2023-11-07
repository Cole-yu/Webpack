const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   mode: 'production',
   devtool: false,
   cache: {
      type: 'filesystem',
      compression: 'gzip',
   },
});