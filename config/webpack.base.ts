import * as path from "path";
import {opti} from "./webpack.optimizer";
import webpack, {Entry, Plugin} from "webpack";
import {rules} from "./webpack.rules";
import {Kore} from "@kirinnee/core";
import "webpack-dev-server";
import {pages} from "./pages";
import {ConvertToOption, Page} from "./Helper";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {VueLoaderPlugin} from "vue-loader";
import WorkboxPlugin from 'workbox-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
import CopyPlugin from "copy-webpack-plugin"


let core = new Kore();
core.ExtendPrimitives();

const htmlPages: Plugin[] = pages.pages
    .Map(s => ConvertToOption(s as Page))
    .Map(s => new HtmlWebpackPlugin(s));

let plugins = [...htmlPages, new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [
        "**/*.*",
        '!.gitignore',
    ]
}),
    new VueLoaderPlugin(),
    new CopyPlugin([{
        from: 'public',
        ignore: [".html"],
        to: ''
    }]),
    new WorkboxPlugin.GenerateSW({
        skipWaiting: true,
        clientsClaim: true,
        include: [
            /\.(js|css|html|json|png|jpg|jpeg|svg)?$/
        ],
        runtimeCaching: [
            {
                urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                handler: "NetworkFirst",
            }
        ]
    }),
];

function GenerateConfig(entry: Entry, filename: string, mode: "development" | "production" | "none"): webpack.Configuration {
    let outDir = path.resolve(__dirname, "../dist");
    plugins = mode === "production" ?
        // production
        plugins

        :
        // devlopment
        plugins.Add(new webpack.HotModuleReplacementPlugin());


    plugins = plugins.Add(new webpack.DefinePlugin({PRODUCTION: JSON.stringify(mode === "production")}));

    let config: webpack.Configuration = {
        entry: entry,
        output: {
            path: outDir,
            filename: filename,
            libraryTarget: "umd",
            globalObject: "(typeof window !== 'undefined' ? window : this)"
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.vue'],
            alias: {'vue$': 'vue/dist/vue.esm.js'}
        },
        mode: mode,
        module: {rules: rules(mode)},
        plugins: plugins
    };
    config.target = "web";
    if (mode === "production") config.optimization = opti;
    else if (mode === "development") {
        config.devServer = {
            contentBase: path.resolve(__dirname, '../dist'),
            hot: true
        }
    }
    return config;
}

export {GenerateConfig};
