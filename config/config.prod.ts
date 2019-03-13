import {RuleSetQuery} from "webpack";

let prodFileOpts: RuleSetQuery = {
	name: '[path][name].[ext]',
	publicPath: 'https://s3-ap-southeast-1.amazonaws.com/kirinnee.portfolio/',
	context: './src'
};

export {
	prodFileOpts
}