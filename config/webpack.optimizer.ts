import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import {Options} from "webpack";


const opti: Options.Optimization = {
    minimizer: [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    drop_console: true,
                    unsafe: true
                },
                output: {comments: false},
                toplevel: true
            }
        })
    ]
};

opti.splitChunks = {
    name: true,
    maxSize: 550000,
    cacheGroups: {
        commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
        }
    }
};

export {opti};
