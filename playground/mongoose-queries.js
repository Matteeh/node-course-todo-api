const {ObjectId} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let userId = '593c5cf65794202a4e17a78c';

/*let id = '593c3bbf4dbe6a14f7fdff32';

if(!ObjectId.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo)
        return console.log('Id not found');

    console.log('Todo', todo);
}).catch((e) => console.log(e));
*/

User.findById(userId).then((user) => {
    if(!user)
        return console.log('User not found');

    console.log(`User:  ${user}`);
}).catch((e)=> console.log(e));