const {User} = require( '../model/userModel.js' );

const userController = {
    createUser: ({body}, res) => {
        const { name, age, email } = body;
        (!body || Object.keys(body).length === 0)
            ? res.status(404).send('All data required'): (() => {
                User.create({ name, age, email })
                    .then(() => res.status(201).send('User created'))
                    .catch(err => res.status(400).send('User already exists'));
            })();
    }
}
User.find({}, (error, result) => console.log(result))
module.exports = userController;