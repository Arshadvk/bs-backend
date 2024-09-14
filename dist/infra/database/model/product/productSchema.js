"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
exports.productSchema = new mongoose_1.Schema({
    product_name: {
        type: String,
        required: true
    },
    category: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "category",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    offer_price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: Array
    },
    unlist: {
        type: Boolean,
        default: true
    },
    size: [{
            type: String,
            required: true
        }],
    review: [{
            name: {
                type: String
            },
            email: {
                type: String
            },
            rating: {
                type: Number
            },
            comment: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now()
            }
        }]
});
