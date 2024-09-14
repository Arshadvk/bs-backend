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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserUseCase = exports.createUser = void 0;
const intex_1 = require("../../domain/entities/user/intex");
const hashing_1 = require("../../domain/service/hashing");
const error_1 = require("../../utils/error");
const createUser = (userRepository) => {
    return (userData) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(userData);
        const isUserExist = yield userRepository.findUserByEmail(userData.email);
        if (isUserExist)
            throw new error_1.AppError("user is already exist", 404);
        const password = yield (0, hashing_1.passwordHashing)(userData.password);
        userData.password = password;
        const user = yield userRepository.createUser(userData);
        return user;
    });
};
exports.createUser = createUser;
const loginUserUseCase = (userRepository) => {
    return (user) => __awaiter(void 0, void 0, void 0, function* () {
        const isUserExist = yield userRepository.findUserByEmail(user.email);
        if (!isUserExist)
            throw new error_1.AppError("user is not exist", 404);
        const userToken = yield (0, intex_1.userLoginValidate)(user, isUserExist);
        console.log(user);
        console.log(isUserExist);
        console.log(userToken);
        const verifiedUser = {
            token: userToken,
            status: "Login success"
        };
        return verifiedUser;
    });
};
exports.loginUserUseCase = loginUserUseCase;
