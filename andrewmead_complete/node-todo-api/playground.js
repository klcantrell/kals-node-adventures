const { MongoClient, ObjectId } = require('mongodb');

(async function MongoConnect() {
  const url = 'mongodb://localhost:27017/TodoApp';
  const dbName = 'TodoApp';
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    // insert play functions here
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
})();

async function playFindOneAndUpdate(db) {
  try {
    const result = await db.collection('Todos').findOneAndUpdate(
      {
        _id: new ObjectId('5bb94cc2dafb1c325c4c491d'),
      },
      {
        $set: {
          completed: true,
        },
      },
      {
        returnOriginal: false,
      }
    );
    console.log('Update successful', result);
  } catch (err) {
    console.log('unable to update', err);
  }
}

async function playFindOneAndDelete(db) {
  try {
    const result = await db
      .collection('Todos')
      .findOneAndDelete({ _id: new ObjectId('5bb950ca84cfb216e452a4ec') });
    console.log('Deletion successful', result);
  } catch (err) {
    console.log('unable to delete', err);
  }
}

async function playDeleteOne(db) {
  try {
    const result = await db
      .collection('Todos')
      .deleteOne({ text: 'Eat lunch' });
    console.log('Deletion successful', result);
  } catch (err) {
    console.log('unable to delete', err);
  }
}

async function playDeleteMany(db) {
  try {
    const result = await db
      .collection('Todos')
      .deleteMany({ text: 'Eat lunch' });
    console.log('Deletion successful', result);
  } catch (err) {
    console.log('could not delete', err);
  }
}

async function playFind(db) {
  try {
    const docs = await db
      .collection('Todos')
      .find({ completed: false })
      .toArray();
    console.log(JSON.stringify(docs, null, 2));
  } catch (err) {
    console.log('Unable to find todos', err);
  }
}

async function playCountTodos(db) {
  try {
    const count = await db
      .collection('Todos')
      .find()
      .count();
    console.log(`Todos count: ${count}`);
  } catch (err) {
    console.log('Unable to find todos', err);
  }
}

async function playFindById(db) {
  try {
    const docs = await db
      .collection('Todos')
      .find({ _id: new ObjectId('5bb950ca84cfb216e452a4ec') })
      .toArray();
    console.log(JSON.stringify(docs, null, 2));
  } catch (err) {
    console.log('Unable to find todos', err);
  }
}

async function playInsertTodo(db) {
  try {
    const result = await db.collection('Todos').insertOne({
      text: 'Eat lunch',
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
    console.log(result.ops[0]._id.getTimestamp());
  } catch (err) {
    console.log('Unable to insert user', err);
  }
}
