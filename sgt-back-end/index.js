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

app.put('/api/grades/:gradeId', (req, res) => {
  const { course, name, score } = req.body;
  const gradeId = parseInt(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  }
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
    UPDATE "grades"
       SET "name" = $1,
           "course" = $2,
           "score" = $3
     WHERE "gradeId" = $4
 RETURNING *;
  `;

  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(data => {
      const [grade] = data.rows;
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
      }

      res.json(grade);
    })
    .catch(err => {
      console.error('Insert grade error:', err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({ error: 'Must enter a valid gradeId' });
  }

  const sql = `
    DELETE FROM "grades"
    WHERE "gradeId" = $1
      RETURNING *;
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(data => {
      const [grade] = data.rows;
      if (!grade) {
        return res.status(404).json({ error: 'ID does not exist in database' });
      }

      res.json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Insert grade error: ', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on PORT:3000');
});
