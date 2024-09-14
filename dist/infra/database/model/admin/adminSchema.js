"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminSchema = void 0;
const mongoose_1 = require("mongoose");
exports.adminSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    number: {
        type: Number
    },
    super: {
        type: Boolean,
        default: false
    }
});
