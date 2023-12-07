// postcss-loader 的配置
// npm install autoprefixer postcss-loader
// const autoprefixer = require("autoprefixer");
module.exports = {
    plugins: [
        // autoprefixer(),
        'postcss-preset-env',
    ],
}