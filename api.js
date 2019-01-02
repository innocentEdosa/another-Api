const http = require('http');

const express = require('express');

// import a body parser for express
const bodyParser = require('body-parser');

const app = express();

// eslint-disable-next-line eol-last
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(3004, () => {});
module.exports = server;
