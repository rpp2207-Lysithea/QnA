const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.status(200).json({ name: 'john' });
});

module.exports = app
