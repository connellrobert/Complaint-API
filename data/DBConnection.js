const mongoose = require("mongoose");
const uri = `mongodb://${process.env.MONGODB_IP || 'localhost:27017'}/complaint`
module.exports = mongoose
  .connect(uri, {
    useCreateIndex: true,
    autoCreate: false,
    bufferCommands: false,
    useNewUrlParser: true,
    autoIndex: true,
    numberOfRetries: 2,
  })
  .then((db) => {})
  .catch(console.error);
