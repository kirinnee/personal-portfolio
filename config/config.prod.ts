import {RuleSetQuery} from "webpack";

let prodFileOpts: RuleSetQuery = {
	name: '[path][name].[hash].[ext]',
	publicPath: 'https://d3t35au9pm0ra5.cloudfront.net/',
	context: './src'
};

export {
	prodFileOpts
}
