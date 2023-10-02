const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours.json`)
);
exports.getAllUsers = (req, res) => {
  res
    .status(200)
    .json({ status: 'success', data: tours, length: tours.length });
};
//create a tour
exports.createUser = (req, res) => {
  console.log(req.body);
  const newId = tours.length;
  const newTour = { id: newId, ...req.body };
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours.json`,
    JSON.stringify(tours),
    (err) => {
      console.log(err);
    }
  );
  res.status(201).send('Data received Successfully');
};
//get a single user
exports.getUser = (req, res) => {
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
exports.editUser = (req, res) => {
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
exports.deleteUser = (req, res) => {
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
