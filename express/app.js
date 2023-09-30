const express = require('express');
const fs = require('fs');

const app = express();
//middle ware setup
app.use(express.json());
const port = 5000;
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`)
);
app.get('/', (req, res) => {
  res.send('Welcome to my backend Api store !!!');
});
//get request
app.get('/api/v1/tours', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', data: tours, length: tours.length });
});
//post request
app.post('/api/v1/tours', (req, res) => {
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
});
//params
app.get('/api/v1/tours/:id', (req, res) => {
  console.log(req.params);
  const id = Number.parseInt(req.params.id);
  const toursForDuration = tours.filter((ex) => ex.duration === id);
  if (toursForDuration.length>0) {
    console.log(toursForDuration);
    res.status(200).json({
      status: 'success',
      data: toursForDuration,
      length: toursForDuration.length,
    });
  } else {
    res.send(404).send('No Tours found for the specified duration');
  }
});
app.listen(port, () => {
  console.log(`Running on ${port}`);
});
