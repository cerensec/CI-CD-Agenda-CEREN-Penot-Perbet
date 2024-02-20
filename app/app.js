const express = require('express');
const http = require('http');
const router = require('./routes/main');

const app = new express();

app.use('/', router);

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);