let {getQuestionsFunction, postQuestionsFunction, postAnswersFunction} = require('./controllers/index.js');
let router = require('express').Router();

router.get('/questions/:id', getQuestionsFunction);
router.post('/questions',postQuestionsFunction);
router.post('/answers/:id', postAnswersFunction);
module.exports = router;