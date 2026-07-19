const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const todos = [];
let nextId = 1;

function findTodoIndexById(id) {
  return todos.findIndex((todo) => todo.id === id);
}

function parseTodoId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}

function buildTodoResponse(todo) {
  return {
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
    createdAt: todo.createdAt,
    updatedAt: todo.updatedAt,
  };
}

app.get('/', (req, res) => {
  res.json({
    message: 'Todo API is running',
    endpoints: {
      list: 'GET /todos',
      getById: 'GET /todos/:id',
      create: 'POST /todos',
      update: 'PUT /todos/:id or PATCH /todos/:id',
      delete: 'DELETE /todos/:id',
    },
  });
});

app.get('/todos', (req, res) => {
  res.json({ todos: todos.map(buildTodoResponse) });
});

app.get('/todos/:id', (req, res) => {
  const id = parseTodoId(req.params.id);

  if (id === null) {
    return res.status(400).json({ error: 'Todo id must be a positive integer' });
  }

  const todo = todos.find((item) => item.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json({ todo: buildTodoResponse(todo) });
});

app.post('/todos', (req, res) => {
  const title = typeof req.body.title === 'string' ? req.body.title.trim() : '';

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const now = new Date().toISOString();
  const todo = {
    id: nextId++,
    title,
    completed: Boolean(req.body.completed),
    createdAt: now,
    updatedAt: now,
  };

  todos.push(todo);

  res.status(201).json({ todo: buildTodoResponse(todo) });
});

function updateTodo(req, res) {
  const id = parseTodoId(req.params.id);

  if (id === null) {
    return res.status(400).json({ error: 'Todo id must be a positive integer' });
  }

  const todoIndex = findTodoIndexById(id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const currentTodo = todos[todoIndex];
  const hasTitle = Object.prototype.hasOwnProperty.call(req.body, 'title');
  const hasCompleted = Object.prototype.hasOwnProperty.call(req.body, 'completed');

  const nextTitle = hasTitle
    ? (typeof req.body.title === 'string' ? req.body.title.trim() : '')
    : currentTodo.title;
  const nextCompleted = hasCompleted ? Boolean(req.body.completed) : currentTodo.completed;

  if (hasTitle && !nextTitle) {
    return res.status(400).json({ error: 'Title cannot be empty' });
  }

  const updatedTodo = {
    ...currentTodo,
    title: nextTitle,
    completed: nextCompleted,
    updatedAt: new Date().toISOString(),
  };

  todos[todoIndex] = updatedTodo;

  res.json({ todo: buildTodoResponse(updatedTodo) });
}

app.put('/todos/:id', updateTodo);
app.patch('/todos/:id', updateTodo);

app.delete('/todos/:id', (req, res) => {
  const id = parseTodoId(req.params.id);

  if (id === null) {
    return res.status(400).json({ error: 'Todo id must be a positive integer' });
  }

  const todoIndex = findTodoIndexById(id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const [deletedTodo] = todos.splice(todoIndex, 1);

  res.json({ todo: buildTodoResponse(deletedTodo) });
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

server.on('error', (error) => {
  console.error('Server failed to start:', error);
});