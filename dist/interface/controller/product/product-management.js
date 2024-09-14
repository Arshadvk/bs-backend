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
exports.editProductController = exports.findProductController = exports.productCreate = void 0;
const intex_1 = require("../../../infra/database/model/product/intex");
const intex_2 = __importDefault(require("../../../infra/repositories/product/intex"));
const intex_3 = require("../../../app/admin/product/intex");
const productRepository = (0, intex_2.default)(intex_1.productModel);
const productCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body.value;
        const product = yield (0, intex_3.createProduct)(productRepository)(data);
        res.status(200).json({ message: "product create successfuly" });
    }
    catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || 'Somthing went wrong' });
    }
});
exports.productCreate = productCreate;
const findProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let filterData = {};
        if (req.query.search) {
            filterData.search = {
                $or: [{ email: { $regex: req.query.search, $options: 'i' } },
                    { name: { $regex: req.query.search, $options: 'i' } },
                ]
            };
        }
        const product = yield (0, intex_3.getAllProductUsecase)(productRepository)(filterData);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || 'Somthing went wrong' });
    }
});
exports.findProductController = findProductController;
const editProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message || 'Somthing went wrong' });
    }
});
exports.editProductController = editProductController;
