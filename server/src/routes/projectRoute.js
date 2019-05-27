var Project = require('../models/project')
// ^ the models are one directory up, that's why there is a ../../etc.
let express = require('express')
let app = express.Router()

app.get('/projects', (req, res) => {
    Project.find({}, 'title description type', function (error, projects) {
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
      Project.findById(req.params.id, function (error, project) {
        if (error) { console.error(error); }
  
        project.title = req.body.title
        project.description = req.body.description
        project.type = req.body.type
        project.ticketNum = req.body.ticketNum;
        project.customerName = req.body.customerName;
        project.customerID = req.body.customerID;
        project.courseID = req.body.courseID;
        project.status = req.body.status;
        project.hours = req.body.hours;
        project.startDate = req.body.startDate;
        project.endDate = req.body.endDate;
        project.faculty = req.body.faculty;

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
      Project.findById(req.params.id, function (error, project) {
        if (error) { console.error(error); }
        res.send(project)
      })
  })

  module.exports = app