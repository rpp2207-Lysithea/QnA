const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const qnaSchema = new mongoose.Schema( {
  //the structure of the data
  'product_id': {
    type: String,
    'unique': true
  },
  'result': String,
  'score': Number,
  'img':String
})
const Qna = mongoose.model('qna', qnaSchema);