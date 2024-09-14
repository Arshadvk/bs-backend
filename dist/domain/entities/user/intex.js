"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginValidate = exports.createToken = exports.userLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const error_1 = require("../../../utils/error");
const hashing_1 = require("../../service/hashing");
const userLogin = (passwordCompare, createToken) => {
    return (user, userData) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = user;
        if (!email || !password || /^\s*$/.test(email) || /^\s*$/.test(password)) {
            throw new error_1.AppError("All fields are requred", 400);
        }
        const isPasswordCorrect = yield passwordCompare(password, userData.password);
        if (!isPasswordCorrect) {
            throw new error_1.AppError("Incorrect password", 401);
        }
        const token = createToken(userData._id);
        return token;
    });
};
exports.userLogin = userLogin;
const createToken = (student) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        throw new Error('JWT secret key is not defined');
    }
    const token = jsonwebtoken_1.default.sign({ student, role: 'user' }, secretKey, { expiresIn: '7day' });
    return token;
};
exports.createToken = createToken;
exports.userLoginValidate = (0, exports.userLogin)(hashing_1.isPasswordCorrect, exports.createToken);
