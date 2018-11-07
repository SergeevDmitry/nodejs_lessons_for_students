const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //deleteMany
  db.collection('Todos').deleteMany({ text: 'Something to do' }).then((result) => {
    console.log(result);
  });

  //deleteOne
  db.collection('Todos').deleteOne({ text: 'Something to do' }).then((result) => {
    console.log(result);
  });

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({ completed: true }).then((result) => {
    console.log(result);
  });

  db.collection('Users').deleteMany({ name: 'Andrew' });

  db.collection('Users').findOneAndDelete({ _id: new ObjectID('29bafad3b32b11dc7ce934204952515ea5984b3c') }.then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  }));

  // client.close();
});
