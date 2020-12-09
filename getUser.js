var mySql = require('mysql');
var myConnection = mySql.createPool({
    host: "localhost",
    user: 'root',
    password: 'password',
    database: 'userDetails',
    port: "3306"
});

var response = {
    success: "",
    error: "",
    data: ""
}

getUserDetails = (res) =>{
    myConnection.query('SELECT * FROM employee_details', function(err, result, fields)
    {
        if (err)  return callback(err);
        if(result.length){
            response.success = "true";
            response.data = result;
            res.send(response);
        }
    });
}
module.exports = {
    getUserDetails: getUserDetails,
  
}