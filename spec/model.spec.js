const {postAnswer,
  question_id,
  product_id,
  questionList,
  postQuestion,
  newQuestion,
  mockQuestionList,
  mockAnswer,
  getData} = require("./exampleData.js")

const mockedSort = jest.fn();
const mockedAnswerSort = jest.fn();
const mockedUpdate = jest.fn();
const mockedSave = jest.fn();
const mockedFind = jest.fn();
const mockedAnswerFind = jest.fn();

class MockAnswer {
  constructor(answer){
    this.answer = answer;
    this._id = 'mockId';
  }
  static findOne() {
    return {
      sort: mockedAnswerSort
    }
  }
  static find (input) {
    return mockedAnswerFind(input);

  }
  save() {
    mockedSave()

  }
}

jest.mock("../db/index.js", () => ({
  Questionlist: {
    findOne: () => ({
      sort: mockedSort
    }),
    find : mockedFind,
    updateOne: mockedUpdate
  },
  Answer: MockAnswer
}))


const {getQuestions, postQuestions, postAnswers} = require("../server/models/index.js");


/*****server model test  *******/

describe('server model test', () => {

  it ('post a new question into questionlist collection', async() => {
    mockedSort.mockImplementationOnce(() => questionList);

    await postQuestions(product_id, postQuestion);

    expect(mockedUpdate).toBeCalledWith({"product_id": questionList.product_id}, {"$push": {"questionList": newQuestion}});
  });


  it ('post a new answer into answer collection', async() => {
    mockedAnswerSort.mockImplementationOnce(() => ({id: 10}));
    await postAnswers(question_id, postAnswer);

    expect(mockedUpdate).toHaveBeenLastCalledWith({"questionList.question_id": 1}, {"$push": {"questionList.$.answers_list": "mockId"}});
  });

  it ('get qna data ', async() => {
    mockedFind.mockImplementationOnce(() => mockQuestionList);
    mockedAnswerFind.mockImplementation((input) => {
      let _id = input._id;
      return mockAnswer[_id];
    });
    const result = await getQuestions(product_id);

    expect(result).toEqual(getData);
  });



})