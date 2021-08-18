const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('@tensorflow/tfjs-node');

require('dotenv').config();

require('./auth/passport');

// Get API information
const api = require('./routes');

// Set up Express App
const app = express();
app.use(express.static('public'));

//Loads the handlebars module
var exphbs = require('express-handlebars');

// Use cookieParser
app.use(cookieParser());
app.use(morgan('dev'));

// Set up CORS
app.use(cors());
app.use(express.json());

// Use defined API
app.use('/api/v1', api);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
	res.render('main', { layout: false });
});

module.exports = app;
