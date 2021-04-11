"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.use(express.static(path_1.default.resolve(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let state = {
    todos: [
        {
            id: '0',
            text: 'test1',
            name: 'test1',
            checked: false,
        },
        {
            id: '1',
            text: 'test2',
            name: 'test2',
            checked: true,
        },
    ]
};
// TODO: req.bodyの型
app.patch('/todos/update/:id', (req, res) => {
    const { id } = req.params;
    const { todoData } = req.body;
    state = {
        ...state,
        todos: state.todos.map((todo) => {
            return todo.id === id ? todoData : todo;
        }),
    };
    res.send(state);
});
app.post('/todos/create', (req, res) => {
    const { todoData } = req.body;
    state = {
        ...state,
        todos: state.todos.concat(todoData),
    };
    res.send(state);
});
app.delete('/todos/delete/:id', (req, res) => {
    const { id } = req.params;
    state = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id)
    };
    res.send(state);
});
app.get('/todos', (req, res) => res.send(state));
app.listen(port, () => console.log('Listening on port 4000'));
