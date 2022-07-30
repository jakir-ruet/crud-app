const router = require('express').Router();
const userController = require('../controller/userController');

router
    .post('/create', userController.createUser)
    .get('/find', userController.findUser)
    .post('/update', userController.updateUser)
    .post('/delete', userController.deleteUser)
    .post('/deleteMany', userController.deleteMany)
    .post('/updateMany', userController.updateMany);
module.exports = {router};