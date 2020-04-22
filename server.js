const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.get('/api', (req, res, done) => res.status(201).json({ message: "Hello World!" }));

app.use(express.static('client/build'));

app.get('*', (req, res) => res.sendFile(path.resolve('client', 'build', 'index.html')));

app.listen(5000);
app.listen(port);
