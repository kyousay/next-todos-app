import { Request, Response } from "express";

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

type Todo = typeof state.todos[number]

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
}

// TODO: req.bodyの型
app.patch('/todos/update/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { todoData } = req.body;
  state = {
    ...state,
    todos: state.todos.map((todo) => {
      return todo.id === id ? todoData : todo
    }),
  }
  res.send(state);
});

app.post('/todos/create', (req: Request, res: Response) => {
  const { todoData } = req.body;
  state = {
    ...state,
    todos: state.todos.concat(todoData),
  }
  res.send(state);
});

app.delete('/todos/delete/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  state = {
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id)
  }
  res.send(state);
});

app.get('/todos', (req: Request, res: Response) => res.send(state));

app.listen(4000, () => console.log('Listening on port 4000'));
