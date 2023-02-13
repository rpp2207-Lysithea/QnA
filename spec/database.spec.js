const {MongoClient} = require("mongodb");
const {Questionlist, Answer} = require('../db/index.js')
const {postAnswer, questionList, question_id} = require("./exampleData.js")

/***********    database schema test ***********/



describe('questionlist and answer schema test',  () => {

  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.__MONGO_DB_NAME__);

  });
  // beforeEach(async () => {
  //   await db.collection('questionlist').deleteMany({});
  // });
  afterAll(async () => {

      await connection.close();

  });

  it('should insert a new questionlist into question', async () => {
    const question = db.collection('questionlist');
    const mockQuestion = new Questionlist(questionList);
    await question.insertOne(mockQuestion);

    const insertedQuestion = await question.findOne({product_id: '71698'});
    expect(insertedQuestion._id).toBeDefined();

  });

  it('should insert a new answer into answer', async () => {
    const answer = db.collection('answer');
    const mockAnswer = new Answer(postAnswer);
    await answer.insertOne(mockAnswer);

    const insertedAnswer= await answer.findOne({id: 1});
    expect(insertedAnswer._id).toBeDefined();

  });
});
