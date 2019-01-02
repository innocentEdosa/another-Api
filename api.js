const http = require('http');

const express = require('express');

// import a body parser for express
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//  import routers
const meetupRoutes = require('./routes/meetup');
const questionRoutes = require('./routes/questions');

// middleware
app.use('/api/v1/meetups', meetupRoutes);
app.use('/api/v1/questions', questionRoutes);

const server = http.createServer(app);
server.listen(3004, () => {});
module.exports = server;
