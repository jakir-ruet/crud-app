const { Schema, model } = require('mongoose');
const validator = require('validator');
const {validators} = require("../validator/validators");

const userSchema = new Schema({
    name: {
        type: [String, 'name must be a string'],
        validate: {
            validator: value => validators.nameValidator(value).bool,
            message: ({ value }) => validators.nameValidator(value).message
        },
    },
    age: {
        type: [Number, 'age must be a number'],
        validate: {
            validator: value => validators.ageValidator(value).bool,
            message: ({ value }) => validators.ageValidator(value).message
        },
    },
    email: {
        type: String,
        trim: true,
        unique: [true, 'email is unique'],
        validate: {
            validator: value => validators.emailValidator(value).bool,
            message: ({ value }) => validators.emailValidator(value).message
        },
    }
})
const User = model('User', userSchema);
module.exports = {User};