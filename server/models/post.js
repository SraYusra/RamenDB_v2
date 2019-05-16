var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
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
  faculty: String,
  department: String
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
