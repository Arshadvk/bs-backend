"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: [
            {
                name: {
                    type: String,
                    required: true
                },
                number: {
                    type: Number,
                    required: true
                },
                pincode: {
                    type: String,
                    required: true
                },
                state: {
                    type: String,
                    required: true
                },
                district: {
                    type: String,
                    required: true
                },
                place: {
                    type: String,
                    required: true
                },
                street: {
                    type: String,
                    required: true
                },
                building: {
                    type: String,
                    required: true
                },
                default_address: {
                    type: Boolean,
                    default: false,
                },
            }
        ]
    },
    cart: {
        type: [{
                product: {
                    type: mongoose_1.Schema.Types.ObjectId, ref: 'product'
                },
                price: {
                    type: Number
                },
                qty: {
                    type: Number
                }
            }]
    },
    is_verified: {
        type: Boolean,
        default: false
    },
    cartTotel: {
        type: Number,
        default: 0
    }, password: {
        type: String
    },
    wallet: {
        type: Number,
        default: 0
    },
    wishlist: {
        type: [{
                prodoct: {
                    type: mongoose_1.Schema.Types.ObjectId
                }
            }]
    },
}, {
    timestamps: { createdAt: true }
});
