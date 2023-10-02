// organizing the code in server file
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

//! middle ware setup
app.use(express.json());
app.use(morgan('dev')); //string is inbuilt format for middleware here
//custom middleware
app.use((req, res, next) => {
  console.log('hello from middleware 😀');
  next(); // if we dont call the next middleware req response cycle will end here
}); //by default middle ware will have the access to req and res the 3rd argument is next middleware in the stack

//! Route Functionalities
//?for tours
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`)
);

//get all tours
const getAllTours = (req, res) => {
  res
    .status(200)
    .json({ status: 'success', data: tours, length: tours.length });
};
//create a tour
const createTour = (req, res) => {
  console.log(req.body);
  const newId = tours.length;
  const newTour = { id: newId, ...req.body };
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours.json`,
    JSON.stringify(tours),
    (err) => {
      console.log(err);
    }
  );
  res.status(201).send('Data received Successfully');
};
//get a single tour
const getTour = (req, res) => {
  console.log(req.params);
  const id = Number.parseInt(req.params.id);
  const toursForDuration = tours.filter((ex) => ex.duration === id);
  if (toursForDuration.length > 0) {
    console.log(toursForDuration);
    res.status(200).json({
      status: 'success',
      data: toursForDuration,
      length: toursForDuration.length,
    });
  } else {
    res.send(404).send('No Tours found for the specified duration');
  }
};
const editTour = (req, res) => {
  console.log(req.params);
  const id = Number.parseInt(req.params.id);
  const toursForDuration = tours.find((ex) => ex.id === id);
  //do modification edit the object
  if (toursForDuration) {
    res.status(200).json({
      status: 'success',
      data: toursForDuration,
    });
  } else {
    res.send(404).send('invalid ID');
  }
};
const deleteTour = (req, res) => {
  const id = Number.parseInt(req.params.id);
  const toursForDuration = tours.filter((ex) => ex.duration === id);
  //add deletion logic
  if (toursForDuration.length > 0) {
    console.log(toursForDuration);
    res.status(204).json({
      data: null,
    });
  } else {
    res.send(404).send('invalid ID');
  }
};
//?Users functionalities(ROUTE HANDLERS)
//get all tours
const getAllUsers = (req, res) => {
  res
    .status(200)
    .json({ status: 'success', data: tours, length: tours.length });
};
//create a tour
const createUser = (req, res) => {
  console.log(req.body);
  const newId = tours.length;
  const newTour = { id: newId, ...req.body };
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours.json`,
    JSON.stringify(tours),
    (err) => {
      console.log(err);
    }
  );
  res.status(201).send('Data received Successfully');
};
//get a single user
const getUser = (req, res) => {
  console.log(req.params);
  const id = Number.parseInt(req.params.id);
  const toursForDuration = tours.filter((ex) => ex.duration === id);
  if (toursForDuration.length > 0) {
    console.log(toursForDuration);
    res.status(200).json({
      status: 'success',
      data: toursForDuration,
      length: toursForDuration.length,
    });
  } else {
    res.send(404).send('No Tours found for the specified duration');
  }
};
const editUser = (req, res) => {
  console.log(req.params);
  const id = Number.parseInt(req.params.id);
  const toursForDuration = tours.find((ex) => ex.id === id);
  //do modification edit the object
  if (toursForDuration) {
    res.status(200).json({
      status: 'success',
      data: toursForDuration,
    });
  } else {
    res.send(404).send('invalid ID');
  }
};
const deleteUser = (req, res) => {
  const id = Number.parseInt(req.params.id);
  const toursForDuration = tours.filter((ex) => ex.duration === id);
  //add deletion logic
  if (toursForDuration.length > 0) {
    console.log(toursForDuration);
    res.status(204).json({
      data: null,
    });
  } else {
    res.send(404).send('invalid ID');
  }
};

//! Routes
app.get('/', (req, res) => {
  res.send('Welcome to my backend Api store !!!');
});
//? tours
app.route('/api/v1/tours').get(getAllTours).post(createTour);
//? if we specify the middleware after the routes it will never be executed because the req res cycle will end by here and there will be no necessity of additional middleware
app.use((req, res, next) => {
  console.log('hello from middleware 😀');
  next(); // if we dont call the next middleware req response cycle will end here
});
app.route('/api/v1/tours').get(getTour).patch(editTour).delete(deleteTour);

//? users
//? tours
app.route('/api/v1/tours').get(getAllUsers).post(createUser);
app.route('/api/v1/tours').get(getUser).patch(editUser).delete(deleteUser);

//! start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Running on ${port}`);
});
