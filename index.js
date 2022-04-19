const { MongoClient } = require('mongodb');
const config = require('./config.json');

const client = new MongoClient(config.uri);
const Connect = async () => {
  const connection = await client.connect();
  const database = connection.db('mongonode');
  database.collection('TestCollection').find({}).toArray((_err, rows) => {
    rows.map((row) => console.log(row));
    connection.close();
  });
};

Connect();
