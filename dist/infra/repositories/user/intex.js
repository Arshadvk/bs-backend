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
const error_1 = require("../../../utils/error");
const userRepositoryIMPL = (userModel) => {
    const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = yield userModel.create(userData);
        return newUser;
    });
    const findUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userModel.findById({ id });
        return user;
    });
    const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userModel.findOne({ email });
        return user;
    });
    const getallUser = (filterData) => __awaiter(void 0, void 0, void 0, function* () {
        if (filterData.search) {
            const allUser = yield userModel.find(filterData.search);
            return allUser;
        }
        else {
            const allStudent = yield userModel.find(filterData);
            return allStudent;
        }
    });
    const updateById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userModel.findByIdAndUpdate(id, data);
        return user;
    });
    const updateIsBlock = (userId, action) => __awaiter(void 0, void 0, void 0, function* () {
        let isBlocked;
        if (action === "block")
            isBlocked = true;
        if (action === "unblock")
            isBlocked = false;
        const user = yield userModel.findByIdAndUpdate(userId, { isBlocked }, { new: true });
        if (!user)
            throw new error_1.AppError('somthing went wrong when block the user', 500);
        return isBlocked;
    });
    return { createUser, findUserById, findUserByEmail, getallUser, updateById, updateIsBlock };
};
exports.default = userRepositoryIMPL;
