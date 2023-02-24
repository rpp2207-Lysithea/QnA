const {getQuestions, postQuestions, postAnswers} = require('../models/index.js');
//for cache set up
const redis = require('redis');
const client = redis.createClient();
(async () => {
    await client.connect();
})();

client.on('ready', () => {
    console.log("Connected!");
});
client.on('error', err => console.log('Redis Client Error', err));

//use cache in get query
const getQuestionsFunction = async (req, res) => {
  let id = `${req.query.product_id}`;
  // console.log(id)
  const cacheKey = id;
 try {
    const cachedData = await client.get(cacheKey);

    if (cachedData !== null) {
     // console.log('Using cached data');
      res.send(JSON.parse(cachedData));
      return;
    }

    //console.log('Fetching new data');
    // If data is not cached, fetch new data from MongoDB and cache it for next time
    const data = await getQuestions(id);
    if( data === undefined) {
        res.send(data);
        return;
    }
    await client.set(cacheKey, JSON.stringify(data), 'EX', 360); // cache for 60 seconds

    res.send(data);
  } catch (err) {
    console.error(err);
  }
};

//before cache
// const getQuestionsFunction = async (req, res) => {
//   let id = `${req.query.product_id}`;
//   const cacheKey = id;
//   console.log(id)
//   try {
//     let data = await getQuestions(id);
//     res.send(data);
//   } catch (err) {
//     console.log('get questions error', err);
//   }

// };


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
    await client.del(product_id);
    res.send('post question success and cache invalidated');
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
    let product_id = await postAnswers(question_id, postData);
    await client.del(product_id);

    res.send('post answer success and cache invalidated');
  } catch (err) {
    console.log('post error', err);
  }

}
module.exports = {getQuestionsFunction, postQuestionsFunction, postAnswersFunction};