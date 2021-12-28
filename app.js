var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var userResource = require('./usermanager/resources/UserResource');
const { init } = require('./usermanager/repositories/UserRepository');
const PORT  = 8080;

app.use(bodyParser.json());
app.use('/users/v1', userResource);

app.listen(PORT , () =>{
    init()
    console.log('Server Started On', PORT);
});

