import {RuleSetQuery} from "webpack";

let prodFileOpts: RuleSetQuery = {
	name: '[path][name].[hash].[ext]',
	publicPath: '/',
	context: './src'
};

export {
	prodFileOpts
}
