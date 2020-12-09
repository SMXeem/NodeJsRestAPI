const mongoose= require("mongoose");

const studentSchema= mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    roll: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Students',studentSchema);