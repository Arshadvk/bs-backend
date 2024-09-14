"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuthToken = exports.userAuthToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userAuthToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const secretKey = process.env.JWT_SECRET_KEY;
        if (!authHeader || !secretKey) {
            return res.status(401).json({ success: false, message: 'not authenticated !', Auth: false });
        }
        jsonwebtoken_1.default.verify(authHeader, secretKey, (err, user) => {
            if (err) {
                return res.status(401).json({ success: false, message: 'not hello !', Auth: false });
            }
            else if (user) {
                if (user.role === 'user' && user.user.isBlocked !== true) {
                    req.user = user;
                }
                else {
                    return res.status(401).json({ success: false, message: 'this token not for user !', Auth: false });
                }
            }
            next();
        });
    }
    catch (error) {
        res.status(401).json({ success: false, message: 'not authenticated !', Auth: false });
    }
};
exports.userAuthToken = userAuthToken;
const adminAuthToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const secretKey = process.env.JWT_SECRET_KEY;
        if (!authHeader || !secretKey) {
            return res.status(401).json({ success: false, message: 'not authenticated !', Auth: false });
        }
        jsonwebtoken_1.default.verify(authHeader, secretKey, (err, user) => {
            if (err) {
                return res.status(401).json({ success: false, message: 'not authenticated !', Auth: false });
            }
            else if (user) {
                if (user.role === 'admin') {
                    req.user = user;
                }
                else {
                    return res.status(401).json({ success: false, message: 'this token not for admin !', Auth: false });
                }
            }
            next();
        });
    }
    catch (error) {
        return res.status(401).json({ success: false, message: 'not authenticated !', Auth: false });
    }
};
exports.adminAuthToken = adminAuthToken;
