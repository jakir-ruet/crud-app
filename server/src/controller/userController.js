const {User} = require( '../model/userModel.js' );

const userController = {
    createUser: ({body}, res) => {
        const { name, age, email } = body;
        User.findOne({email}, (err, doc) => {
            (!body || Object.keys(body).length === 0)
                ? res.status(404).send('All data required'):
                doc ? res.status(400).send('User Allready exists'): (() => {
                    User.create({ name, age, email })
                        .then(() => res.status(201).send('User created'))
                        .catch(err => res.status(400).send(err) )
                })();
        })

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
                            .catch(err => res.status(400).send(`Error occurred: ${err.message}`))
                        })();
        })
    },
    deleteUser: ({body: {email}}, res) => {
        User.findOne({email}, {}, (err, doc) => {
            err ? (() => console.log(err.message))():
                !doc ? res.status(400).send('email not found'):
                    User.findOneAndDelete({ email })
                        .then(() => res.status(200).send('User deleted'))
        });
    }
}

module.exports = userController;