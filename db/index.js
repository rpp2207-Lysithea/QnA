const mongoose = require('mongoose');
const main = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/qna',{
        useNewUrlParser: true,
        useUnifiedTopology: true,

    });

  } catch (err) {
    console.log('DB connection Error', err);
  }
}

mongoose.set("strictQuery", false);
main();



const questionSchema = new mongoose.Schema({
  question_id: {type: Number, unique: true},
  question_body: String,
  question_date: Date,
  asker_name: String,
  question_helpfulness: Number,
  reported: Boolean,
  answers_list: [{type: mongoose.Schema.Types.ObjectId, ref:"answer"}]
})

const questionListSchema = new mongoose.Schema( {
  //the structure of the data
  product_id: {type: String, unique: true},
  questionList:[questionSchema]
})

const Questionlist = mongoose.model('questionList', questionListSchema);

const answerSchema = new mongoose.Schema( {
  //the structure of the data
  id: {type: Number, unique: true},
  body: String,
  date: Date,
  answerer_name: String,
  helpfulness: Number,
  reported: Boolean,
  photos:[]
});

const Answer = mongoose.model('answer', answerSchema);

/***** one document schema ******/
/*
const qnaSchema = new mongoose.Schema({
  product_id: String,
  question_id: Number,
  question_body: String,
  question_date: Date,
  asker_name: String,
  question_helpfulness: Number,
  reported: Boolean,
  answers:[answerSchema]

})
const QNA = mongoose.model('qna', qnaSchema)

*/


module.exports = {Questionlist, Answer};