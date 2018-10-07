const request = require('supertest');

const { app } = require('../app');
const { Todo } = require('../db/models/todo');
const { mongoose } = require('../db/mongoose');

beforeEach(async () => {
  await Todo.remove({});
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('POST /todos', () => {
  it('should create a new todo', async done => {
    try {
      const text = 'Test todo text';
      const response = await request(app)
        .post('/todos')
        .send({ text });
      expect(response.statusCode).toBe(200);
      expect(response.body.text).toBe(text);

      const todos = await Todo.find();
      expect(todos.length).toBe(1);
      expect(todos[0].text).toBe(text);

      done();
    } catch (err) {
      await mongoose.disconnect();
      throw err;
      done();
    }
  });

  it('should not create a new todo with invalid text', async done => {
    try {
      const text = '';
      const response = await request(app)
        .post('/todos')
        .send({ text });
      expect(response.statusCode).toBe(400);

      const todos = await Todo.find();
      expect(todos.length).toBe(0);

      done();
    } catch (err) {
      await mongoose.disconnect();
      throw err;
      done();
    }
  });
});
