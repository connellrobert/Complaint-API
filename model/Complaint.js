// const mongoose = require("../data/DBConnection");
const mongoose = require("mongoose");

// mongoose.then((m) => {
const complaintSchema = new mongoose.Schema({
  isAnonymous: Boolean,
  name: String, 
  complaintDescription: String,
  resolution: String,
  submission: Date,
});
const Complaint = mongoose.model("Complaint", complaintSchema);
Complaint.createCollection().then(console.log).catch(console.error);
module.exports = Complaint;
// });
