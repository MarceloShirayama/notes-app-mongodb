/* eslint-disable no-console */
const mongoose = require('mongoose');

const HOST = process.env.MONGO_HOST;
const PORT = process.env.MONGO_PORT;
const DATABASE = process.env.MONGO_DATABASE;

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;

const uri = `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

// mongoose.connect(uri, options)
//   // eslint-disable-next-line no-unused-vars
//   .then((_db) => console.log('Database is connected'))
//   .catch((err) => console.log(err));

try {
  mongoose.connect(uri, options);
  console.log('Database is connected');
} catch (err) {
  console.log(err);
}

mongoose.connection.on('error', (err) => console.error(err));
