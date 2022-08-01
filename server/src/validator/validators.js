const validator = require('validator');

const validators = {
    nameValidator: name => {
        console.log('name ', name);
        const nameLength = name[0].length;
        let returnObj = {
            bool: ((nameLength >= 2) && nameLength <= 20 && name),
            message: null
        };
        !(nameLength >= 2) ? (() => {
            returnObj.message = "Name's length at least 2";
        })(): !(nameLength <= 20) ? (() => {
            returnObj.message = "Name's length maximum length 20";
        })(): (!name) ? (() => {
                returnObj.message = "Name's required";
            })():
                null;

        return {...returnObj};
    },
    ageValidator: age => {
        console.log('age ', age);
        let returnObj = {
            bool: (age >= 2) && age <= 20 && age,
            message: null
        };
        !(age >= 2) ? (() => {
            returnObj.message = "Age at least 2";
        })(): !(age <= 20) ? (() => {
            returnObj.message = "Age maximum length 20";
        })(): (!age) ? (() => {
                returnObj.message = "Age's required";
            })():
            null;

        return {...returnObj};
    },
    emailValidator: email => {
        console.log('email ', email);
        const emailLength = email.length;
        let returnObj = {
            bool: (emailLength >= 2) && emailLength <= 20 && email && validator.isEmail(email) ,
            message: null
        };
        !(emailLength >= 2) ? (() => {
            returnObj.message = "Age at least 2";
        })(): !(emailLength <= 20) ? (() => {
            returnObj.message = "Age maximum length 20";
        })(): !email ? (() => {
                returnObj.message = "Age's required";
            })(): !validator.isEmail(email) ? (() => {
                returnObj.message = "Please, Enter a valid Email"
            })():
            null;

        return {...returnObj};
    },
}
module.exports = { validators };