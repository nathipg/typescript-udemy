import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as {text: string}).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res
    .status(201)
    .json({
      message: 'Todo created',
      createTodo: newTodo
    });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res
    .json({todos: [...TODOS]});
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as {text: string}).text;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

  if(todoIndex < 0) {
    throw new Error('Not found');
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

  res
    .json({
      message: 'Todo updated',
      updatedTodo: TODOS[todoIndex]
    });
}

export const deleteTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

  if(todoIndex < 0) {
    throw new Error('Not found');
  }

  TODOS.splice(todoIndex);

  res
    .json({
      message: 'Todo deleted'
    });
};