const mongoose = require('mongoose');

function connectToDb(dbUrl) {
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

  const connection = mongoose.connection;

  connection.on('error', () => {
    console.error('Error connection to database');
  });
}

module.exports = {
  connectToDb,
};
