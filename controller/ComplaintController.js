const Complaint = require("../model/Complaint");

const saveComplaint = async (complaint) => {
  return new Complaint({ ...complaint, submission: new Date() }).save()
};

const deleteComplaint = async (complaint) => {
 return await Complaint.deleteOne(complaint, (err) => {});
};

const findAllBySubmissionDate = async (date) => {
  return await Complaint.find({ submission: date });
};

const findAll = async () => {
  return await Complaint.find({});
};

const updateComplaint = async (complaint) => {
  return await Complaint.updateOne({_id: complaint._id},{$set: {...complaint}}, (err) => {});
};

module.exports = {
  saveComplaint,
  deleteComplaint,
  findAllBySubmissionDate,
  findAll,
  updateComplaint,
};
