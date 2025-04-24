const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongo DB Connection Successful');
});

connection.on('error', (err) => {
  console.log('Mongo DB Connection Error', err);
});
