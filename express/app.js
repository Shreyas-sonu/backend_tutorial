// organizing the code in server file
const express = require('express');
const fs = require('fs');

const app = express();
//middle ware setup
app.use(express.json());
const port = 5000;
app.get('/', (req, res) => {
  res.send('Welcome to my backend Api store !!!');
});

//for tours
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

//! routes
// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// //params
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', editTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// further modification
// all
app.route('/api/v1/tours').get(getAllTours).post(createTour);
//specific
app.route('/api/v1/tours').get(getTour).patch(editTour).delete(deleteTour);

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
