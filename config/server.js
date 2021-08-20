var express = require('express');

var app = express();
var porta = 2121;

app.use(express.static('./'))

module.exports = {app, porta}