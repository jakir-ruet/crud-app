const config = require('./config.json');
const mongoose = require('mongoose');

module.exports = { dbConnection: async () => {
        await mongoose.connect(config.dbConfig.dbUri, {
            dbCrud: config.dbConfig.dbCrud
        });
    }}