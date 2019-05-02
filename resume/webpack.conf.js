const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// const ExtractPlugin = require("extract-text-webpack-plugin");                // webpack 4 以后应该使用 mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");                // 分离css文件，不会压缩
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");  // 压缩css文件

const UglifyJsPlugin =require("uglifyjs-webpack-plugin");   // 压缩js成功:要对中间状态生成的js进行语法转化 

const isDev = process.env.NODE_ENV === "development";   // 环境判断

const config={
    target:"web",       // 为浏览器环境，不是服务器环境
    entry:path.join(__dirname,"src/index.js"),
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"dist")
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
            // {
            //     test:/\.css/,
            //     use:[
            //         "style-loader",
            //         "css-loader"
            //     ]
            // },
            {
                test:/\.(gif|jpg|jpeg|png|svg|ttf|eot|woff|woff2)$/,        // 处理 font-awesome 的字体文件
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:1024,
                            name:"[name].[ext]",
                            outputPath:"assets/"
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,      // 排除文件
                loader: 'babel-loader'
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
                title: '个人简历',               // 不会替换指定模板文件中的title元素的内容
                favicon: './src/assets/images/title.png',       // 设置网页标题的favicon.icon路径
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

    // 注意 以后需要注意rules中添加了规则，导致顺序不对的问题
    config.module.rules[2].use[0].options.name = "[name].[hash:8].[ext]";   // 生产环境添加 hash 值

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
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin()     
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