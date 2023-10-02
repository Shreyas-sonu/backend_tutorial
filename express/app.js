const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

//! middle ware setup
app.use(express.json());
app.use(morgan('dev')); //string is inbuilt format for middleware here
//custom middleware
app.use((req, res, next) => {
  console.log('hello from middleware 😀');
  next(); // if we dont call the next middleware req response cycle will end here
}); //by default middle ware will have the access to req and res the 3rd argument is next middleware in the stack

//! Routes
app.get('/', (req, res) => {
  res.send('Welcome to my backend Api store !!!');
});
app.use('/api/v1/tours', tourRouter);// also a middleware
app.use('/api/v1/users', userRouter);

module.exports = app;
