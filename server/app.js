const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Router
var router = require('./routes.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/qa', router);


//test
// app.get('/', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });


module.exports = app
