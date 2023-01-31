const {getQuestions} = require('../models/index.js');

const getQuestionsFunction = async (req, res) => {
  let id = `${req.params.id}`;
  try {
    let data = await getQuestions(id);
    res.send(data);
  } catch (err) {
    console.log('get questions error', err);
  }

}

module.exports = {getQuestionsFunction};