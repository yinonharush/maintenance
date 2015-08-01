var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/*', function (req, res) {
  res.redirect('/');
});


var server = app.listen(80, function () {
  // var host = server.address().address;
  var port = server.address().port;

  console.log('Maintenance app listening on port %s', port);
});