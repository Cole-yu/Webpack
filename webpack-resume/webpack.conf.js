const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// const ExtractPlugin = require("extract-text-webpack-plugin");                // webpack 4 以后应该使用 mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");                // 分离css文件，不会压缩
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");  // 压缩css文件

const isDev = process.env.NODE_ENV === "development";   // 环境判断

const config={
    target:"web",       // 为浏览器环境，不是服务器环境
    entry:path.join(__dirname,"src/index.js"),
    output:{
        filename:"bundle.[hash:8].js",
        path:path.join(__dirname,"dist")
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'           //内部为正则表达式 vue结尾的
        }
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.jsx$/,
                loader:"babel-loader"
            },
            {
                test: /\.(ts|tsx)?$/,
                use: {
                    loader:'ts-loader',
                    options:{
                        appendTsSuffixTo: [/\.vue$/] 
                    }
                },
                exclude: /node_modules/
            },
            // {
            //     test:/\.css/,
            //     use:[
            //         "style-loader",
            //         "css-loader"
            //     ]
            // },            
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:1024,
                            name:"[name].[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },    
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:isDev ? '"development"' : '"production"'
            }
        }), 
        new VueLoaderPlugin(),
        new HTMLPlugin({
                title: '个人简历',              // 不会替换指定模板文件中的title元素的内容
                template:"./src/index.html",
                minify:{                        // 压缩HTML文件
                    removeComments:true,        // 移除HTML中的注释
                    collapseWhitespace:true     // 删除空白符与换行符
                }
            }       
        )
    ],
    // mode:"development"
    // mode:"none"
    // mode:"production"
}

// 开发环境
if(isDev){
    config.mode="development";

    config.module.rules.push(
        {
            test:/\.(c|sc|sa)ss$/,
            use:[
                'style-loader',
                'css-loader',
                {
                    loader:'postcss-loader',
                    options:{
                        sourceMap:true                            
                    }
                },
                'sass-loader'
            ]
        }        
    );

    config.devtool="#cheap.module-eval-source-map";

    config.devServer={
        port:8000,
        host:'127.0.0.1',
        overlay:{               // 直接在页面上显示错误信息
            error:true
        },
        open:true,
        hot:true
    };

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );    
}
else{                           // 生产环境，webpack自动会压缩js文件
    config.mode="production";

    config.entry={
        app:path.join(__dirname,"src/index.js"),
        vendor:['vue']
    };

    config.output.filename='[name].[chunkHash:8].js';           // 因为vendor一般是不变的，所以不能用hash,用chunkhash(基于模块来计算)

    config.module.rules.push(
        {
            test:/\.(c|sc|sa)ss$/,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader:'postcss-loader',
                    options:{
                        sourceMap:true                            
                    }
                },
                "sass-loader"                
            ]
        }
    );

    config.optimization={
        minimizer: [            
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks:{
            cacheGroups:{
                vendor:{
                    test:/node_modules/,
                    chunks:"initial",
                    name:"vendor",
                    priority:10,
                    enforce:true
                }
            }            
        }
    };

    config.plugins.push(        
        new MiniCssExtractPlugin({
            filename: "styles.[hash:8].css",   // 用hash,基本compilation在项目编译时改变，一个版本一个hash
            chunkFilename: "[id].css"
        })
    );
}

module.exports=config;