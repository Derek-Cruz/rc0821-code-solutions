const express = require('express');
const app = express();
const grades = {};
let nextId = 1;

app.get('/api/grades', (req, res) => {
  const allGrades = [];
  for (const property in grades) {
    allGrades.push(grades[property]);
  }
  res.json(allGrades);
});

const parse = express.json();
app.use(parse);
app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
