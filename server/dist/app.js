"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Users_1 = __importDefault(require("./api/models/Users"));
const app = (0, express_1.default)();
mongoose_1.default.connect('mongodb+srv://sai:sai@gestion.jz5kd.mongodb.net/livraison?retryWrites=true&w=majority');
app.get('/getUsers', (req, res) => {
    Users_1.default.find({}, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});
app.listen(3001, () => {
    console.log('server is runing');
});
