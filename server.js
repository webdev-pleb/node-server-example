var express = require('express');
var app     = express();
var path    = require("path");

// set static directories
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log('Listening on port ',  port);