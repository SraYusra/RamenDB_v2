var mongoose = require('mongoose');

module.exports.connect = function() {
	mongoose.connect("mongodb+srv://user:1u2s3e4r5@cluster0-o8kxl.mongodb.net/test?retryWrites=true",{useNewUrlParser: true});
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(callback){
	  console.log("Connection Succeeded");
	});
	return db;
}