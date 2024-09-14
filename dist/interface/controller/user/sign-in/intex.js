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
exports.userSignIn = void 0;
const signUp_1 = require("../../../../app/user/signUp");
const intex_1 = __importDefault(require("../../../../infra/repositories/user/intex"));
const intex_2 = require("../../../../infra/database/model/user/intex");
const userRepository = (0, intex_1.default)(intex_2.userModel);
const userSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = req.body.value;
        const userToken = (0, signUp_1.loginUserUseCase)(userRepository)(value);
        console.log(userToken);
        res.status(200).json(userToken);
    }
    catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || 'Somthing went wrong' });
    }
});
exports.userSignIn = userSignIn;
