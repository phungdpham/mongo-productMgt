const mongodb = require('mongodb');

let _db;

const MongoClient = mongodb.MongoClient;
const mongoDbUrl = 
        'mongodb+srv://phungpham:0aN0K1d8LgzxHI8S@cluster0-gbixc.mongodb.net/shop?retryWrites=true'

const initDb = callback => {
  if (_db) {
    console.log('Database is already initizalized');
    return callback();
  }
  MongoClient
    .connect(mongoDbUrl)
    .then(client => {
      _db = client;
      callback(null, _db);
    })
    .catch(err => {
      callback(err);
    });
}

const getDb = () => {
  if (!_db) {
    throw Error('Database not initialzed');
  }
  return _db;
}

module.exports = {
  initDb,
  getDb
}