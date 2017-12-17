const express = require('express');
const app = express();
const morgan = require('morgan');
const userRoute = require('./api/route/user');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/test', userRoute);


module.exports = app;
