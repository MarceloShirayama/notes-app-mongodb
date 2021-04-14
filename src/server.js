const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', handlebars({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({ extended: true }));

// Global variables

// Routes
app.use(require('./routes/index.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
