const mongoose = require('mongoose')
const novelSchema = new mongoose.Schema({
    book: {
        type: String,
        required: 'Name is Required',
        trim: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    priority: {
        type: Number
    }
})

//Make the Class Public, Export as a Mongoose Model
module.exports = mongoose.model('Novel', novelSchema)