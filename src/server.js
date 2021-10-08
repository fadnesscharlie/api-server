'use strict';

const express = require('express');
const morgan = require('morgan');

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');

const app = express();

// express Global Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes/ CRUD
app.use(foodRouter);
app.use(clothesRouter);

// Error Handlers - last to be added
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port') }
    app.listen(port, () => console.log(`Listening on ${port}`));
  }
}
