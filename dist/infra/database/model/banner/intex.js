"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bannerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bannerModel_1 = require("./bannerModel");
exports.bannerModel = mongoose_1.default.connection.model("banner", bannerModel_1.bannerSchema);
