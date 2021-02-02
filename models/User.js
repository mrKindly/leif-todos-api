const mongoose = require('mongoose');

export const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    id: String,
    email: String
});
