const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const usersService = require('./services/users.service');
const todosService = require('./services/todos.service');


const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));

app.get('/todos', (req, res) => {
  res.send(todosService.getTodos())
});

app.get('/todos/:userId', (req, res) => {
  const id = req.params.userId;
  res.send(todosService.getTodosByUser(parseInt(id)));
});

app.get('/users', (req, res) => {
  res.send(usersService.getUsers());
});

app.post('/users', (req, res) => {
  res.send(usersService.addUser(req.body));
});


app.listen(PORT, () => console.log(`Listening on ${PORT}`))
