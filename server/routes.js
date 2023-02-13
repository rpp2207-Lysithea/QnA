let {getQuestionsFunction, postQuestionsFunction, postAnswersFunction} = require('./controllers/index.js');
let router = require('express').Router();

router.get('/questions', getQuestionsFunction);
router.post('/questions',postQuestionsFunction);
router.post('/questions/:id/answers', postAnswersFunction);
module.exports = router;