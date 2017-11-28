var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Define User schema
var _User = new Schema({
    name : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
})
export default mongoose.model('User', _User);