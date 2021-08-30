import {RuleSetQuery} from "webpack";

const prodFileOpts: RuleSetQuery = {
    name: "[path][name].[hash].[ext]",
    publicPath: "/",
    context: "./src"
};

export {
    prodFileOpts
};
