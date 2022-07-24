const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config/config.json');
const http = require('http');
const { router } = require("./routes/userRouter.js");
const { dbConnection } = require("./config/dbConnection.js");

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);

//listing configuration
const PORT = config.port || 8080;
http.createServer(app).listen(PORT, config.hostname, () => {
    console.log(`listing the port at http://localhost:${PORT}`)
});
dbConnection();
console.log('Database Connection');


