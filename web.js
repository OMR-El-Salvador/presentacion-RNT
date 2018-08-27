var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var logger = require('morgan');

app.use(logger);
app.use('/', express.static(__dirname));
app.listen(port, function() {
  console.log('Server started on ' + port);
});
