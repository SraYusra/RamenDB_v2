var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: String,
  description: String,
  ticketNum: String,
  type: String,
  customerName: String,
  customerID: String,
  courseID: String,
  status: String,
  hours: String,
  startDate: Date,
  endDate: Date,
  faculty: String
});

var Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
