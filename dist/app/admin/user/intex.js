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
exports.blockUserUseCase = exports.getAllUserUsecase = void 0;
const getAllUserUsecase = (userRepository) => {
    return (filterData) => __awaiter(void 0, void 0, void 0, function* () {
        const allUser = yield userRepository.getallUser(filterData);
        return allUser;
    });
};
exports.getAllUserUsecase = getAllUserUsecase;
const blockUserUseCase = (userRepository) => {
    return (userId, action) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userRepository.updateIsBlock(userId, action);
        return user;
    });
};
exports.blockUserUseCase = blockUserUseCase;
