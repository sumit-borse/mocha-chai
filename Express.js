var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var UserService = require('./getUser');

app.use(bodyParser.json());

app.get('/getAllUser', async function (req, res) {
   UserService.getUserDetails(res);
});

 app.listen(3001, function () {
   console.log("Example app listening at http://localhost:3001")
})
