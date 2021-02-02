const todos = [{
    title: 'Do exercises',
    description: 'Do plank, do abs, 10k steps',
    userId: 1,
    isDone: false
}, {
    title: 'Test',
    description: 'Test todo',
    userId: 1,
    isDone: false
}, {
    title: 'Prepare task',
    description: 'Prepare task for Elza according Promise',
    userId: 2,
    isDone: false
}];

function getTodos() {
    return todos;
}

function getTodosByUser(userId) {
    return todos.filter(todo => todo.userId === userId);
}

module.exports.getTodos = getTodos;
module.exports.getTodosByUser = getTodosByUser;