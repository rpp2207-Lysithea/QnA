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
}

// const getAnswers =async (answerId) => {
//   return await Answer.find({_id : `${answerId}`});
// }

// const postQuestions = () => {

// }

// const postAnswers = () => {

// }

// const reportOrMarkAsHelpful = () => {

// }

// module.exports = {getQuestions, getAnswers, postQuestions, postAnswers, reportOrMarkAsHelpful}

module.exports = {getQuestions};