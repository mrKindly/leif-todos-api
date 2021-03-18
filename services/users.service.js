const users = [{
    firstName: 'Elza',
    lastName: 'Loresh',
    id: 1
}, {
    firstName: 'Ivan',
    lastName: 'Fediaev',
    id: 2
}];

function getUsers() {
    return users;
}

function addUser(user) {
    users.push(user);
    return users;
}

module.exports.getUsers = getUsers;
module.exports.addUser = addUser;