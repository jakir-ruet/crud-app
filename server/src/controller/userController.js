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
    },
    findUser: ({ body: {email} }, res) => {
        User.findOne({email}, (err, doc) => {
            err ? (() => {throw err})():
                !doc ? res.status(404).send('email not found'):
                    (() => {
                        User.findOne({ email }, {}, (err, doc) => {
                            err ? (() => {throw err})(): res.status(200).json(doc);
                        });
                    })();
        })
    },
    updateUser: ({ body: {email, update} }, res) => {
        User.findOne({email}, (err, doc) => {
            err ? (() => {throw err})():
                !doc ? res.status(400).send('email not found'):
                    !update ? res.status(400).send('update required for updating'):
                        update.email ? res.status(400).send('You cannot update email') :(() => {
                        User.findOneAndUpdate({ email }, update)
                            .then(() => res.status(200).send('User updated'))
                            .catch(err => res.status(400).send(`Error occured: ${err.message}`))
                        })();
        })
    }
}

module.exports = userController;