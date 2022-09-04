"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRouter_1 = __importDefault(require("./routers/loginRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
app.use('/login', loginRouter_1.default);
app.get('/', (_req, res) => {
    res.status(200).send('Express + TypeScript');
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
