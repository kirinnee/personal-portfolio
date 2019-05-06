import {RuleSetQuery} from "webpack";

let prodFileOpts: RuleSetQuery = {
	name: '[path][name].[hash].[ext]',
	publicPath: 'https://d3iwbuomikd272.cloudfront.net/',
	context: './src'
};

export {
	prodFileOpts
}
