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
exports.blockUserController = exports.getAllUserSearchFilterSortController = void 0;
const intex_1 = require("../../../app/admin/user/intex");
const intex_2 = __importDefault(require("../../../infra/repositories/user/intex"));
const intex_3 = require("../../../infra/database/model/user/intex");
const error_1 = require("../../../utils/error");
const userRepository = (0, intex_2.default)(intex_3.userModel);
const getAllUserSearchFilterSortController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let filterData = {};
        if (req.query.search) {
            filterData.search = {
                $or: [{ email: { $regex: req.query.search, $options: 'i' } },
                    { name: { $regex: req.query.search, $options: 'i' } },
                ]
            };
        }
        const user = yield (0, intex_1.getAllUserUsecase)(userRepository)(filterData);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || 'Somthing went wrong' });
    }
});
exports.getAllUserSearchFilterSortController = getAllUserSearchFilterSortController;
const blockUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.id;
        const action = req.body.action;
        if (!userId || !action)
            throw new error_1.AppError("Not found", 404);
        const blocked = yield (0, intex_1.blockUserUseCase)(userRepository)(userId, action);
        if (blocked === true)
            res.status(200).json({ message: 'user blocked succesfully' });
        if (blocked === false)
            res.status(200).json({ message: 'User unblocked succesfully' });
    }
    catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || 'Somthing went wrong' });
    }
});
exports.blockUserController = blockUserController;
