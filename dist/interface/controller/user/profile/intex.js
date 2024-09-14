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
exports.getUserProfile = void 0;
const intex_1 = require("../../../../infra/database/model/user/intex");
const intex_2 = __importDefault(require("../../../../infra/repositories/user/intex"));
const profile_1 = require("../../../../app/user/profile");
const userRepository = (0, intex_2.default)(intex_1.userModel);
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.user;
        const user = yield (0, profile_1.getProfileUsecase)(userRepository)(id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || 'Somthing went wrong' });
    }
});
exports.getUserProfile = getUserProfile;
