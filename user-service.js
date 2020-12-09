
var mySql = require('mysql');
var myConnection = mySql.createPool({
    host: "localhost",
    user: 'root',
    password: 'password',
    database: 'userDetails',
    port: "3306"
});

var result = [];
var  getInformationFromDB = function(callback) {

myConnection.query('SELECT * FROM employee_details', function(err, res, fields)
{
    if (err)  return callback(err);
     if(res.length){
    for(var i = 0; i<res.length; i++ ){     
           result.push(res[i]);
        }
     }
   callback(null, result);
});
}

getInformationFromDB(function (err, result) {
if (err)
    return "Database error!";
else
    return result;
});

module.exports = {
  getInformationFromDB: getInformationFromDB,
  
}