import {RuleSetQuery} from "webpack";

const devFileOpts: RuleSetQuery = {
    name: "[path][name].[ext]",
    publicPath: "",
    context: "./src/pages"
};

export {
    devFileOpts
};
