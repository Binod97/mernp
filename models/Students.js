const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    firstname: {type: String, require: true},
    lastname: {type: String, require: true},
    place: {type: String, require: true}

});
module.exports = mongoose.model('Student', studentSchema);