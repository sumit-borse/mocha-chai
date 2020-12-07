var mySql = require('mysql');


var myConnection = mySql.createPool({
    host: "localhost",
    user: 'root',
    password: 'password',
    database: 'userDetails',
    port: "3306"
});
var retval;
if(myConnection)
    retval="connected";
else
    retval="error"

module.exports = retval;