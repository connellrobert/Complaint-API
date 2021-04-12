const mongoose = require("mongoose");
const uri = process.env.MONGODB_URL || 'mongodb://localhost:27017/complaint'
module.exports = mongoose.connect(uri, {
  useCreateIndex: true,
  autoCreate: false,
  bufferCommands: false,
  useNewUrlParser: true,
  autoIndex: true,
  numberOfRetries: 2,
}).then(db => {


// const db = mongoose.connection;
// db.on('error',console.error.bind(console, 'connection error: '));
// db.once('open', () => { 
//   console.log("db connection succeeded"); 

// })
console.log(db)
}).catch(console.error);
