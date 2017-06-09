const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

/*let newTodo = new Todo({
    text: 'Cook dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo');
})

let myTodo = new Todo({
    text: '  Edit this video  '
});

myTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo');
})*/

module.exports = {Todo};
