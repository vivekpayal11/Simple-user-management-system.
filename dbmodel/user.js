const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  
    name: String,
    email: String,
    mobile: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('UserDetails', UserSchema);

