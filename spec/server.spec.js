const supertest = require("supertest");
const app = require("../server/app.js");

describe('initinalize', () => {
  it ('response to path /', async() => {
    const response = await supertest(app).get('/');
    expect(response.statusCode).toBe(200);

  });

})