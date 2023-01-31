const express = require('express');
const bodyParser = require('body-parser');
// Router
var router = require('./routes.js');

const app = express();

app.use(bodyParser.json());
app.use('/qa', router);


//test
app.get('/', function(req, res) {
  res.status(200).json({ name: 'john' });
});


module.exports = app
