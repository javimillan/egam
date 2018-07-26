const mongoose = require('mongoose');
const URI = 'mongodb://localhost/gam';

mongoose.connect(URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;


mongoose.Promise = global.Promise;
module.exports = {
    User: require('./users/user.model')
};
