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
exports.userSignUp = void 0;
const signUp_1 = require("../../../../app/user/signUp");
const intex_1 = __importDefault(require("../../../../infra/repositories/user/intex"));
const intex_2 = require("../../../../infra/database/model/user/intex");
const email_send_1 = require("../../../../domain/service/email-send");
const userRepository = (0, intex_1.default)(intex_2.userModel);
const userSignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = req.body.data;
        console.log(value);
        const newUser = yield (0, signUp_1.createUser)(userRepository)(value);
        (0, email_send_1.sendMail)(newUser);
        res.status(200).send({ message: "account created succussfully" });
    }
    catch (error) {
        console.log(error);
        res.status(error.statusCode || 500).json({ message: error.message || 'Somthing went wrong' });
    }
});
exports.userSignUp = userSignUp;
