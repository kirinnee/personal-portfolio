import {IPage} from "./Helper";

const pages :IPage = {
    chunks: [
        ["index","./src/pages/index/index.ts"]
    ],
    pages: [
        {
            template: "index.html",
            output: "index.html",
            chunks: ["index"],
            title: "Kirinnee"
        }
    ],
};

export {pages};
