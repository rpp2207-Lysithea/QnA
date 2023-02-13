const request = require('supertest');

const mockedGetQuestions = jest.fn();
const mockedPostQuestions = jest.fn();
const mockedPostAnswers = jest.fn();
class MockDate {
  constructor(date) {
    this.date = date
  }
  static now () {
    return 'mockDate'
  }
}
Date = MockDate;

jest.mock('../server/models/index.js', () => ({

  getQuestions: mockedGetQuestions,
  postQuestions: mockedPostQuestions ,
  postAnswers: mockedPostAnswers

}))



const app = require('../server/app.js');

describe('get questions test', () => {

  it('should response the right id from the request url and back to server side', async() => {
    mockedGetQuestions.mockImplementationOnce((id) => id);
    const response = await request(app).get('/qa/questions?product_id=71698');
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual('71698');
  })

});
describe('post questions test', () => {

  it('should post designed structure data and sent it into postQuestions', async() => {
    let sendData = {
      product_id: 71698,
      body: 'server test post question',
      name:'Debra',
      email: '123@gmail.com'
    }
    let responseData = {
      answers_list: [],
      asker_name: "Debra",
      question_body: "server test post question",
      question_date: {date:"mockDate"},
      question_helpfulness: 0,
      reported: false
    }
    const response = await request(app).post('/qa/questions').send(sendData);
    expect(mockedPostQuestions).toBeCalledWith('71698', responseData);

    expect(response.statusCode).toBe(200);

  })

});
describe('post answers test', () => {

  it('should post designed structure data and sent it into postAnswers', async() => {
    let sendData = {
      body: 'server test post answer',
      name: 'Debra',
      email: '123@gmail.com',
      photos: []
    }
    let responseData = {
      photos: [],
      answerer_name: "Debra",
      body: "server test post answer",
      date: {date:"mockDate"},
      helpfulness: 0,
      reported: false
    }
    const response = await request(app).post('/qa/questions/123/answers').send(sendData);
    expect(mockedPostAnswers).toBeCalledWith('123', responseData);

    expect(response.statusCode).toBe(200);

  })

});