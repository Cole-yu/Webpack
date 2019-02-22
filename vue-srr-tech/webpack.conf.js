const path = require("path");
const webpack=require('webpack');
const HMTLPlugin=require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin'); 
// const { VueLoaderPlugin } = require('vue-loader');  // TODO:两种方式
const ExtractPlugin=require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); 

const isDev = process.env.NODE_ENV === "development";

const config={
    target:'web',
    // entry:[ "babel-polyfill" , path.join(__dirname,'src/index.js')], 
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:"bundle.[hash:8].js",
        path:path.join(__dirname,'dist')
    },    
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'
            },
            // {
            //     test: /\.css$/,                
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
                            name:'[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ],        
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:isDev ? '"development"':'"production"'
            }
        }), 
        new VueLoaderPlugin(),
        new HMTLPlugin()
    ],
    mode:"none"
}

if(isDev){
    config.module.rules.push({
        test:/\.styl(us)?$/,      // 或者写成 /\.styl/
        use:[
            'style-loader',
            'css-loader',
            {
                loader:'postcss-loader',
                options:{
                    sourceMap:true                            
                }
            },
            'stylus-loader'
        ]
    });
    config.devtool="#cheap-module-eval-source-map";
    config.devServer = {
        port:8000,
        host:'127.0.0.1',       //0.0.0.0
        overlay:{
            errors:true
        },
        open:true, 
        // historyFallback:{
        // },
        hot:true
    };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );
}
else{
    config.entry={
        app:path.join(__dirname,'src/index.js'),
        vendor: ['vue']      
    }
    config.optimization={
        splitChunks:{            
            cacheGroups: {
                // commons: {               // TODO 写上就会报错
                //     name: "commons",
                //     chunks: "initial",
                //     minChunks: 2 ,maxInitalRequests:5,
                //     minSize:0
                // },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true          
                }
            }
        }
    }

    // config.optimization={   // TODO UglifyJs报错
    //     minimize: true,
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             sourceMap: false
    //         })
    //     ],
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 chunks: 'initial',
    //                 name: 'vendor',
    //                 test: 'vendor',
    //                 enforce: true
    //             }
    //         }
    //     }
    // }
    config.output.filename='[name].[chunkHash:8].js';
    config.module.rules.push(
        {
            test:/\.styl/,
            use:ExtractPlugin.extract({
                fallback:"style-loader",
                use:[
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true                            
                        }
                    },
                    'stylus-loader'
                ]
            })
        }
    )
    config.plugins.push(
        new ExtractPlugin('styles.[chunkHash:8].css'),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor' // 指定公共 bundle 的名称。
        // })    
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'runtime'
        // })   
    )
}

module.exports=config;
