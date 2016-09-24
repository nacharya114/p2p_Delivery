var express = require('express');
var path = require('path');
var app = express();

app.use('/',express.static(path.resolve(__dirname,'../www')));

app.route('/api/maps')
.get(function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
