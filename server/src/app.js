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

// Here all the other routes would be imported
var projectRoute = require('./routes/projectRoute');

// Here the routes are used
app.use(projectRoute);


app.listen(process.env.PORT || 8081)
