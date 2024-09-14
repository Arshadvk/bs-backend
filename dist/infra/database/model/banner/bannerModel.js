"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bannerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.bannerSchema = new mongoose_1.Schema({
    image: {
        type: String
    }, caption: {
        type: String
    },
    title: {
        type: String
    },
    sub_title: {
        type: String,
    }
});
