const {getQuestions, postQuestions, postAnswers} = require('../models/index.js');

const getQuestionsFunction = async (req, res) => {
  let id = `${req.params.id}`;
  try {
    let data = await getQuestions(id);
    res.send(data);
  } catch (err) {
    console.log('get questions error', err);
  }

};

const postQuestionsFunction = async (req, res) => {
  let data = req.body;
  let product_id = `${data.product_id}`;

  let date = Date.now();
  let postData = {
    asker_name : data.name,
    question_body: data.body,
    question_date: new Date(date),
    question_helpfulness: 0,
    reported : false,
    answers_list: []
  };
  try {
    await postQuestions(product_id, postData);
    res.send('post question success');
  } catch (err) {
    console.log('post error', err);
  }
};

const postAnswersFunction = async (req, res) => {
  let data = req.body;
  let question_id = `${req.params.id}`;
  let date = Date.now();
  let postData = {
    body : data.body,
    date : new Date(date),
    answerer_name: data.name,
    helpfulness: 0,
    reported : false,
    photos: data.photos
  };
  try {
    await postAnswers(question_id, postData);
    res.send('post answer success');
  } catch (err) {
    console.log('post error', err);
  }

}
module.exports = {getQuestionsFunction, postQuestionsFunction, postAnswersFunction};