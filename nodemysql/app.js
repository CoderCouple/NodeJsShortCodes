const express = require('express');
const db = require('./databaseAPI');
const app = express();


app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get('/connect', function(req, res) {
 
   var emailID = req.body.emailID;
   var password = req.body.password;
   function isAuthenticUser(callbackFunction,emailID,password) {
    var isAuthenticUserQuery = "select * from Users where email='" + emailID + "' and password='"+password+"'";
    console.log("Query is:" + isAuthenticUserQuery);

    db.executeQuery(function(err, results) {
        if (err) {
            console.log("ERROR: " + error.message);
            throw err;
        } else {
            if (results.length > 0) {
                console.log("Valid Login...!!!");
		           status= true;

            }else {
               console.log("Invalid Login...!!!");
		status= false;

            }

        }
	callbackFunction(status);
    }, isAuthenticUserQuery);



}
});

app.listen(5000, function() {
    console.log('Example app listening on port 5000!')
})

