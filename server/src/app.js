const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();

var Project = require("../models/project");

app.get('/projects', (req, res) => {
  Project.find({}, 'title description', function (error, projects) {
	  if (error) { console.error(error); }
	  res.send({
			projects: projects
		})
	}).sort({_id:-1})
})

app.post('/add_project', (req, res) => {
	var db = req.db;
	var title = req.body.title;
	var description = req.body.description;
	var ticketNum = req.body.ticketNum;
	var type = req.body.type;
	var customerName = req.body.customerName;
	var customerID = req.body.customerID;
	var courseID = req.body.courseID;
	var status = req.body.status;
	var hours = req.body.hours;
	var startDate = req.body.startDate;
	var endDate = req.body.endDate;
	var faculty = req.body.faculty;

	var new_project = new Project({
		title: title,
		description: description,
		ticketNum: ticketNum,
  		type: type,
  		customerName: customerName,
  		customerID: customerID,
  		courseID: courseID,
  		status: status,
  		hours: hours,
  		startDate: startDate,
		endDate: endDate,
		faculty: faculty
	})

	// console.log(new_project)
	// return

	new_project.save(function (error) {
		if (error) {
			console.log(error)
		}
		res.send({
			success: true
		})
	})
})

app.put('/projects/:id', (req, res) => {
	var db = req.db;
	Project.findById(req.params.id, 'title description', function (error, project) {
	  if (error) { console.error(error); }

	  project.title = req.body.title
	  project.description = req.body.description
	  project.save(function (error) {
			if (error) {
				console.log(error)
			}
			res.send({
				success: true
			})
		})
	})
})

app.delete('/projects/:id', (req, res) => {
	var db = req.db;
	Project.remove({
		_id: req.params.id
	}, function(err, project){
		if (err)
			res.send(err)
		res.send({
			success: true
		})
	})
})

app.get('/project/:id', (req, res) => {
	var db = req.db;
	Project.findById(req.params.id, 'title description', function (error, project) {
	  if (error) { console.error(error); }
	  res.send(project)
	})
})

app.listen(process.env.PORT || 8081)
