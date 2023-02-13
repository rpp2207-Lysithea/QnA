const qnaData = {
  qData: {
    'product_id': '71704',
    'results': [
      {
        'question_id': 631417,
        'question_body': 'Does this product run big or small?',
        'question_date': '2018-08-04T00:00:00.000Z',
        'asker_name': 'jbilas',
        'question_helpfulness': 31,
        'reported': false,
        'answers': {
          '5897220': {
            'id': 5897220,
            'body': 'It runs pretty wide on me',
            'date': '2018-09-04T00:00:00.000Z',
            'answerer_name': 'dschulman',
            'helpfulness': 5,
            'photos': []
          },
          '5988773': {
            'id': 5988773,
            'body': 'I will buy this for rpp2205',
            'date': '2022-10-20T00:00:00.000Z',
            'answerer_name': 'JutinKid',
            'helpfulness': 33,
            'photos': [
              'https://i.ibb.co/FJzgjTn/20aa2dbfdaae.jpg'
            ]
          }
        }
      },
      {
        'question_id': 631412,
        'question_body': 'What fabric is the top made of?',
        'question_date': '2018-02-12T00:00:00.000Z',
        'asker_name': 'mrmrs',
        'question_helpfulness': 14,
        'reported': false,
        'answers': {
          '5897244': {
            'id': 5897244,
            'body': 'Supposedly suede, but I think its synthetic',
            'date': '2018-03-12T00:00:00.000Z',
            'answerer_name': 'mrmrs',
            'helpfulness': 8,
            'photos': []
          },
          '5897268': {
            'id': 5897268,
            'body': 'Suede',
            'date': '2018-03-12T00:00:00.000Z',
            'answerer_name': 'mrmrs',
            'helpfulness': 12,
            'photos': []
          },
          '5988573': {
            'id': 5988573,
            'body': 'The labor of the oppressed',
            'date': '2022-09-17T00:00:00.000Z',
            'answerer_name': 'proproletariat',
            'helpfulness': 1,
            'photos': []
          },
          '5988586': {
            'id': 5988586,
            'body': 'It is made out of a lot of things. Mostly hopes and dreams.',
            'date': '2022-09-17T00:00:00.000Z',
            'answerer_name': 'hello',
            'helpfulness': 2,
            'photos': []
          },
          '5988588': {
            'id': 5988588,
            'body': 'Pete. Davidson.',
            'date': '2022-09-17T00:00:00.000Z',
            'answerer_name': 'PeteHater',
            'helpfulness': 0,
            'photos': [
              'blob:http://ec2-3-144-176-4.us-east-2.compute.amazonaws.com:8080/cf468331-ddf2-4128-be21-da1f24e3c232',
              'blob:http://ec2-3-144-176-4.us-east-2.compute.amazonaws.com:8080/362097b4-f6ed-4032-abbb-c3972eb97e8a',
              'blob:http://ec2-3-144-176-4.us-east-2.compute.amazonaws.com:8080/d2c2fd1a-0347-4267-b195-63d0c47742ff',
              'blob:http://ec2-3-144-176-4.us-east-2.compute.amazonaws.com:8080/61c28873-d42c-4b23-b315-b534a11d592e',
              'blob:http://ec2-3-144-176-4.us-east-2.compute.amazonaws.com:8080/69e57d67-4841-422a-ac49-7e17823c7f6c'
            ]
          },
          '5988662': {
            'id': 5988662,
            'body': 'rare silk from the moon',
            'date': '2022-10-13T00:00:00.000Z',
            'answerer_name': 'YeezyStan123',
            'helpfulness': 0,
            'photos': []
          },
          '5988682': {
            'id': 5988682,
            'body': 'I\'m not sure',
            'date': '2022-10-17T00:00:00.000Z',
            'answerer_name': 'unknown',
            'helpfulness': 0,
            'photos': []
          },
          '5988685': {
            'id': 5988685,
            'body': 'wow this product is cool',
            'date': '2022-10-17T00:00:00.000Z',
            'answerer_name': 'rpp2205',
            'helpfulness': 0,
            'photos': []
          }
        }
      },
      {
        'question_id': 643297,
        'question_body': 'will i be cool again?',
        'question_date': '2022-09-17T00:00:00.000Z',
        'asker_name': 'not kanye west',
        'question_helpfulness': 1,
        'reported': false,
        'answers': {
          '5988673': {
            'id': 5988673,
            'body': 'I don\'t believe so...',
            'date': '2022-10-16T00:00:00.000Z',
            'answerer_name': 'joker',
            'helpfulness': 1,
            'photos': []
          }
        }
      }
    ]
  }
};
const postAnswer = {
  id: 1,
  body: 'unit test post answer',
  date: '2023-02-12T04:39:33.219+00:00',
  answerer_name: 'Debra',
  helpfulness: 0,
  reported: false,
  photos: []
};

const question_id = 1;
const product_id = 71698;

const questionList = {
  product_id: '71698',
  questionList: [ {
    question_id: 1,
    question_body: 'unit test post question',
    question_date: '2023-02-12T04:36:55.128Z',
    asker_name: 'Debra',
    question_helpfulness: 0,
    reported: false,
    answers_list: [],
}
]
};
const postQuestion = {
    question_body: 'questionlist unit test1',
    question_date: '2023-02-12T04:36:55.128Z',
    asker_name: 'Debra',
    question_helpfulness: 0,
    reported: false,
    answers_list: []
}
const newQuestion = {
  question_body: 'questionlist unit test1',
  question_date: '2023-02-12T04:36:55.128Z',
  asker_name: 'Debra',
  question_helpfulness: 0,
  reported: false,
  answers_list: [],
  question_id:2
}
const mockQuestionList = [
  {
    _id: '63d8abe64d9b9a47aa20acc8',
    questionList: [
      {
        asker_name: 'Joseph_Ortiz4',
        question_id: 252167,
        question_body: 'Ut sit et eum est.',
        question_date: "2020-11-08T05:00:55.517Z",
        question_helpfulness: 9,
        reported: false,
        answers_list: []
      },
      {
        question_id: 3518964,
        question_body: 'questionlis-test1',
        question_date: '2023-02-03T04:36:55.128Z',
        asker_name: 'Debra',
        question_helpfulness: 0,
        reported: false,
        answers_list: [
          '63dec095c4a91c0066bb0ac9',
          '63dc9360913a40e07b26d1e1',
        ]
      }
    ],
    product_id: '71698'
  }
]
const mockAnswer = {
  '63dec095c4a91c0066bb0ac9' : [{
  _id: '63dec095c4a91c0066bb0ac9',
  id: 6879311,
  body: 'test2',
  date: '2023-02-04T20:31:17.190Z',
  answerer_name: 'vaan',
  helpfulness: 0,
  reported: false,
  photos: [],
  }],
'63dc9360913a40e07b26d1e1' : [{
    _id: '63dc9360913a40e07b26d1e1',
    id: 6879310,
    body: 'answer-test2',
    date: '2023-02-03T04:53:52.864Z',
    answerer_name: 'Debra',
    helpfulness: 0,
    reported: false,
    photos: [],
  }]
}
const getData = {
  "product_id": "71698",
  "results": [
    {
      "answers": {},
      "asker_name":"Joseph_Ortiz4",
      "question_body": "Ut sit et eum est.",
      "question_date": "2020-11-08T05:00:55.517Z",
      "question_helpfulness": 9,
      "question_id": 252167,
      "reported": false
    },
   {
    "answers": {
      "6879310": {
        "_id": "63dc9360913a40e07b26d1e1",
        "answerer_name": "Debra",
        "body": "answer-test2",
        "date": "2023-02-03T04:53:52.864Z",
        "helpfulness": 0,
        "id": 6879310,
        "photos": [],
        "reported": false
      },
      "6879311": {
        "_id": "63dec095c4a91c0066bb0ac9",
        "answerer_name": "vaan",
        "body": "test2",
        "date": "2023-02-04T20:31:17.190Z",
        "helpfulness": 0,
        "id": 6879311,
        "photos": [],
        "reported": false
      }},
      "asker_name": "Debra",
      "question_body": "questionlis-test1",
      "question_date": "2023-02-03T04:36:55.128Z",
      "question_helpfulness": 0, "question_id": 3518964,
      "reported": false
    }
  ]}
module.exports = {postAnswer,
  question_id,
  questionList,
  postQuestion,
  product_id,newQuestion,
  mockQuestionList,
  mockAnswer,
  getData};