const { Schema, model } = require('mongoose');
const validator = require('validator');

const userSchema = new Schema({
    name: {
        type: [String, 'name must be a string'],
        trim: true,
        minlength: [2, 'min length is 3'],
        maxlength: [20, 'max length is 20'],
        required: [true, 'name is required'],
    },
    age: {
        type: [Number, 'age must be a number'],
        min: [3, 'min age is 3'],
        max: [80, 'max age is 80'],
        required: [true, 'age is required'],
    },
    email: {
        type: String,
        trim: true,
        minlength: [3, 'min length is 3'],
        maxlength: [50, 'max length is 20'],
        required: [true, 'email is required'],
        unique: [true, 'email is unique'],
        validate: {
            validator: function (value) {
                return validator.isEmail(value);
            },
            message: 'Enter a valid email address'
        }
    }
})
const User = model('User', userSchema);
module.exports = {User};