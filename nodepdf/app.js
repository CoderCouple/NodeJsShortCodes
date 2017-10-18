var express = require('express'),
        fs = require('fs'),
        app = express();
    app.get('/', function (req, res) {
        var filePath = "/files/a.pdf";
	console.log(__dirname);
//https://gist.github.com/adamgibbons/af2de54c011e68a7b85a#file-node-pdf-generator-js
//https://github.com/zishon89us/node-cheat/blob/master/pdf/pdf_browser/app.js
        fs.readFile(__dirname + filePath , function (err,data){
            res.contentType("application/pdf");
            res.send(data);
        });
    });

    app.listen(9000, function(){
        console.log('Listening on 9000');
    });
