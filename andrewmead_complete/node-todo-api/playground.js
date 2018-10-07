const { MongoClient } = require('mongodb');

(async function MongoConnect() {
  const url = 'mongodb://localhost:27017/TodoApp';
  const dbName = 'TodoApp';
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    // await playInsert(db);
    await playInsertUser(db);
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
})();

async function playInsertTodo(db) {
  try {
    const result = await db.collection('Todos').insertOne({
      text: 'Something to do',
      completed: false,
    });
    console.log(result.ops);
  } catch (err) {
    console.log('Unable to insert todo', err);
  }
}

async function playInsertUser(db) {
  try {
    const result = await db.collection('Users').insertOne({
      name: 'Kal',
      age: 29,
      location: 'Broad Ripple',
    });
    console.log(result.ops);
  } catch (err) {
    console.log('Unable to insert todo', err);
  }
}
