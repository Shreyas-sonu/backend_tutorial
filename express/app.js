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
app.get('/api/v1/tours', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', data: tours, length: tours.length });
});
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
  res.status(200).send('Data received Successfully');
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
