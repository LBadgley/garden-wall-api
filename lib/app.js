const express = require('express');
const routes = require('./routes/characters');


const app = express();
// const cors = require('cors');
app.use('/', routes);

app.use(express.static(__dirname + '/Public'));
