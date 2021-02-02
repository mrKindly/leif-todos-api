const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    description: String,
    title: String,
    id: String,
    isDone: Boolean
});

module.exports.model = Todo;
