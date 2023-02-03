let {Questionlist, Answer}  = require('../../db/index.js');


const getQuestions = async (productId) => {
  //productId should be type of string

  let data = await Questionlist.find({'product_id': `${productId}`});

  // no such product
  if (data.length === 0) {
    return undefined;
  }

  let results = await Promise.all(data[0].questionList.map(async (item) => {

    let {asker_name, question_id, question_body, question_date, question_helpfulness, reported} = item;
    let questionObj = {asker_name, question_id, question_body, question_date, question_helpfulness, reported};

    const answersArray = await Promise.all(item.answers_list.map( async (answersId) =>  {
      return await Answer.find({_id : `${answersId}`});
    }));

    let answers = {};

    // no answers
    if (answersArray.length === 0) {
      questionObj.answers = answers;
      return questionObj;
    }
    // has answers
    let answersReported = false;

    answersArray[0].forEach((answersObj) => {
      let id = (answersObj.id);
      answersReported ||= answersObj.reported;
      answers[id] = answersObj;
    })

    questionObj.reported ||= answersReported ;
    questionObj.answers = answers;

    return questionObj;

  }))

  let finnalData = {
    'product_id' : data[0].product_id,
    'results': results
  }

  return finnalData;
};


const postQuestions = async (product_id, question) => {
  try {
    let findQuestionCount = await Questionlist.findOne().sort({'questionList.question_id' : -1});
    let maxCount = 0;
    findQuestionCount.questionList.forEach((item) => {
      if (item.question_id > maxCount) {
        maxCount = item.question_id;
      }
    })
    question.question_id = maxCount + 1;

    await Questionlist.updateOne({'product_id':`${product_id}`}, {$push : {
      questionList : question }});

  } catch (err) {
    console.log('post question to database error', err)
  }

};

const postAnswers = async(question_id, answer) => {
// add answers, get id and save it into question list
try {
  let findAnswerCount = await Answer.findOne().sort({'id': -1});
  let answerId = findAnswerCount.id + 1;
  answer.id = answerId;
  console.log('answer', answer);
  let newAnswer = new Answer (answer);
  console.log('get answer', newAnswer._id)
  await newAnswer.save();
  let getAnswerOriginId = newAnswer._id;
  await Questionlist.updateOne({'questionList.question_id': question_id}, {$push : {
    'questionList.$.answers_list' : getAnswerOriginId }})

} catch (err) {
  console.log('post answer to database error');
}

}

const reportOrMarkAsHelpful = () => {

}

// module.exports = {getQuestions, getAnswers, postQuestions, postAnswers, reportOrMarkAsHelpful}

module.exports = {getQuestions, postQuestions, postAnswers};