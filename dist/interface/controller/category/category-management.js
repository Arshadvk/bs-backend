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
exports.findCategoryController = exports.editCategoryController = exports.createCategory = void 0;
const intex_1 = require("../../../infra/database/model/category/intex");
const intex_2 = __importDefault(require("../../../infra/repositories/category/intex"));
const intex_3 = require("../../../app/admin/category/intex");
const categoryRepository = (0, intex_2.default)(intex_1.categoryModel);
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body.value;
        const category = yield (0, intex_3.categoryCreate)(categoryRepository)(data);
        res.status(200).json({ message: "category create successfuly" });
    }
    catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || 'Somthing went wrong' });
    }
});
exports.createCategory = createCategory;
const editCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body.value;
    }
    catch (error) {
    }
});
exports.editCategoryController = editCategoryController;
const findCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
});
exports.findCategoryController = findCategoryController;
