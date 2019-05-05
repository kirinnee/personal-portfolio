import {RuleSetQuery} from "webpack";

let prodFileOpts: RuleSetQuery = {
	name: '[path][name].[hash].[ext]',
	publicPath: 'https://d1w2hran25a477.cloudfront.net/',
	context: './src'
};

export {
	prodFileOpts
}
