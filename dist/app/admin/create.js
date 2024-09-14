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
exports.loginAdminUseCase = exports.createAdmin = void 0;
const intex_1 = require("../../domain/entities/admin/intex");
const hashing_1 = require("../../domain/service/hashing");
const error_1 = require("../../utils/error");
const createAdmin = (adminRepository) => {
    return (adminData) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(adminData);
        const isUserExist = yield adminRepository.findAdminByEmail(adminData.email);
        if (isUserExist)
            throw new error_1.AppError("user is already exist", 404);
        const password = yield (0, hashing_1.passwordHashing)(adminData.password);
        adminData.password = password;
        const user = yield adminRepository.createAdmin(adminData);
        return user;
    });
};
exports.createAdmin = createAdmin;
const loginAdminUseCase = (adminRepository) => {
    return (user) => __awaiter(void 0, void 0, void 0, function* () {
        const isUserExist = yield adminRepository.findAdminByEmail(user.email);
        if (!isUserExist)
            throw new error_1.AppError("user is not exist", 404);
        const adminToken = yield (0, intex_1.adminLoginValidate)(user, isUserExist);
        const verifiedAdmin = {
            token: adminToken,
            status: "Login success"
        };
        return verifiedAdmin;
    });
};
exports.loginAdminUseCase = loginAdminUseCase;
