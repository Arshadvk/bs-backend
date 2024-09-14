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
exports.adminSignIn = void 0;
const create_1 = require("../../../app/admin/create");
const intex_1 = __importDefault(require("../../../infra/repositories/admin/intex"));
const intex_2 = require("../../../infra/database/model/admin/intex");
const adminRepository = (0, intex_1.default)(intex_2.adminModel);
const adminSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = req.body.value;
        const adminToken = (0, create_1.loginAdminUseCase)(adminRepository)(value);
        res.status(200).json({ token: adminToken });
    }
    catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || 'Somthing went wrong' });
    }
});
exports.adminSignIn = adminSignIn;
