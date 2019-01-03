const http = require('http');

const express = require('express');

// import a body parser for express
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//  import routers
const meetupRoutes = require('./routes/meetup');
const questionRoutes = require('./routes/questions');
const rsvpRoutes = require('./routes/rsvp');

// middleware
app.use('/api/v1/meetups', meetupRoutes);
app.use('/api/v1/questions', questionRoutes);
app.use('/api/v1/meetups/:meetup/rsvp', rsvpRoutes);

const server = http.createServer(app);
server.listen(3004, () => {});
module.exports = server;
