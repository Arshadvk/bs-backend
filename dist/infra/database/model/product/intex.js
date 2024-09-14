"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema_1 = require("./productSchema");
exports.productModel = mongoose_1.default.connection.model("product", productSchema_1.productSchema);
