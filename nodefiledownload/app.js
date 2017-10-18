const express = require('express');
const app = express();
const path = require('path');


app.get('/', function(req, res) {

   res.send("Hello World...!!!");

});

app.get('/download/:filename', function(req, res) {

    var file = req.params.filename;
    var path = require('path');
    console.log(process.env.PATH);
    console.log("Path ", path.resolve("."))
    var path = path.resolve(".") + '/public/uploads/' + file;
    //res.download(path);
    res.download(path, 'report.pdf', function(err){
    if (err) {
    // Handle error, but keep in mind the response may be partially-sent
    // so check res.headersSent
    } else {
    // decrement a download credit, etc.
    }
});


});

app.listen(8000, function() {
    console.log('Example app listening on port 8000!')
})
