let {getQuestionsFunction} = require('./controllers/index.js');
let router = require('express').Router();

router.get('/questions/:id', getQuestionsFunction);

module.exports = router;