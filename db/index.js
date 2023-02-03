const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');
const connection= mongoose.connect('mongodb://127.0.0.1:27017/qna', {useNewUrlParser: true})
.then (() => {
  console.log('Connected to DB!');
})
.catch((err) => {
  console.error(error.message);
  process.exit(-1);
})
// autoIncrement.initialize(mongoose.connection);


const questionSchema = new mongoose.Schema({
  question_id: {type: Number, unique: true,  required : true},
  question_body: String,
  question_date: Date,
  asker_name: String,
  question_helpfulness: Number,
  reported: Boolean,
  answers_list: [{type: mongoose.Schema.Types.ObjectId, ref: "Answer"}]
})


const questionListSchema = new mongoose.Schema( {
  //the structure of the data
  product_id: {type: String, unique: true},
  questionList:[questionSchema]
});

// questionListSchema.plugin(autoIncrement.plugin, {
//   model: 'Questionlist',
//   field: 'questionList.question_id',
//   startAt: 10000000,
//   incrementBy: 1
// });
const Questionlist = mongoose.model('questionList', questionListSchema);

const answerSchema = new mongoose.Schema( {
  //the structure of the data
  id: {type: Number, unique: true, required: true},
  body: String,
  date: Date,
  answerer_name: String,
  helpfulness: Number,
  reported: Boolean,
  photos:[]
});

// answerSchema.plugin(autoIncrement.plugin, {
//   model: 'Answer',
//   field: 'id',
//   startAt: 10000000,
//   incrementBy: 1
// });

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