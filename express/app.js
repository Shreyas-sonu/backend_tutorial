const express = require('express');
const fs = require('fs');

const app = express();
const port = 5000;
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`)
);
app.get('/', (req, res) => {
    res.send('Welcome to my backend Api store !!!')
})
app.get('/api/v1/tours', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', data: tours, length: tours.length });
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
