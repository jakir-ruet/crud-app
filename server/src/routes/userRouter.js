const router = require('express').Router();
const userController = require('../controller/userController');
const cors = require("cors");
const config = require("../config/config.json");

const corsConfig = cors(config.corsConfig);

router
    .post('/create', corsConfig, userController.createUser)
    .get('/find', corsConfig, userController.findUser)
    .post('/update', corsConfig, userController.updateUser)
    .post('/delete', corsConfig,userController.deleteUser);
module.exports = {router};