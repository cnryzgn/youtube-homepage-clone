"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 8001;
const API_KEY = process.env.API_KEY;
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=javascript+tutorial&key=${API_KEY}&maxResults=20`)
        .then((result) => result.json())
        .then((data) => res.send(JSON.stringify(data.items)))
        .catch((err) => console.log(err));
});
app.listen(PORT, () => console.log(`Server running : http://localhost:${PORT}`));
