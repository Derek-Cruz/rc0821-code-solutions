const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    SELECT *
      FROM grades;
  `;
  db.query(sql)
    .then(data => {
      const grades = data.rows;

      res.json(grades);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Get grades error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.post('/api/grades', (req, res) => {
  const { course, name, score } = req.body;

  if (!name) {
    res.status(400).json({ error: 'Grade must have a name' });
    return;
  } else if (!course) {
    res.status(400).json({ error: 'Grade must have a course' });
    return;
  } else if (!score) {
    res.status(400).json({ error: 'Grade must have a score' });
    return;
  } else if (score < 0 || score > 100) {
    res.status(400).json({ error: 'Grade must have be between 0 and 100' });
    return;
  }

  const sql = `
   INSERT INTO grades("name", "course", "score") VALUES
    ($1, $2, $3)
     RETURNING *;
  `;
  const params = [name, course, score];

  db.query(sql, params)
    .then(data => {
      const [grade] = data.rows;

      res.status(201).json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Insert grade error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on PORT:3000');
});
