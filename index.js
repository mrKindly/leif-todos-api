const express = require('express');
const path = require('path');
const usersService = require('./services/users.service');
const todosService = require('./services/todos.service');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/todos', (req, res) => {
  res.send(todosService.getTodos())
});

app.get('/todos/:userId', (req, res) => {
  const id = req.params.userId;
  res.send(todosService.getTodosByUser(parseInt(id)));
});

app.get('/users', (req, res) => {
  res.send(usersService.getUsers());
})

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));


app.listen(PORT, () => console.log(`Listening on ${PORT}`))
