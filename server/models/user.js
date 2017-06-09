const mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
})

/*let user = new User({
    email: '  Matteeh@yahoo.se   '
});

newUser.save().then((doc) => {
    console.log('Saved User', doc);
}, (e) => {
    console.log('Unable to save User');
})*/

module.exports = {User};