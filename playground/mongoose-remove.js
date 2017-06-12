const {ObjectId} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


/*Todo.remove({}).then((result) => {
   console.log(result); 
});
*/
//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findONeANdRemove({_id: '593f25427f5cf17d3773aff4'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('593f25427f5cf17d3773aff4').then((todo) => {
    console.log(todo);
});