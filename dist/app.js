"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan")); // Middleware to log incoming requests
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const admin_1 = __importDefault(require("./interface/routes/admin"));
const user_1 = __importDefault(require("./interface/routes/user"));
const dbConfig_1 = __importDefault(require("./infra/database/dbConfig"));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
//mogodb connection
(0, dbConfig_1.default)(process.env.MONGODB_CONNECTION_URL || "");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use('/admin', admin_1.default);
app.use('/', user_1.default);
// port setting
const PORT = Number(4000 || process.env.PORT);
const server = app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
