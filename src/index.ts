import { Application } from 'express';

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');

const router = require('./app/routes');

const app: Application = express();
const PORT = 3000;

//static file
app.use(express.static(path.join(__dirname, 'public')));

//http ts node logger
app.use(morgan('combined'));

//using html template
app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// http request router
router(app);

//listening on port
app.listen(PORT, () => {
    console.log('app running at hjhj');
});
