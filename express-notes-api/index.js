const express = require('express');
const app = express();
const fs = require('fs');
const notes = require('./data.json');

const parse = express.json();
app.use(parse);

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const prop in notes.notes) {
    const resJSON = notes.notes[prop];
    notesArr.push(resJSON);
  }
  res.status(200).json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  if (Number.isInteger(parseInt(req.params.id)) && parseInt(req.params.id) > 0) {
    if (notes.notes[req.params.id]) {
      res.status(200).json(notes.notes[req.params.id]);
    } else {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  } else {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
});

app.post('/api/notes', (req, res) => {
  const newNote = notes.nextId;
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    notes.notes[newNote] = {
      id: newNote,
      content: req.body.content
    };
    notes.nextId++;
    fs.writeFile('./data.json ', JSON.stringify(notes, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error has occurred' });
      } else {
        res.status(201).json(notes.notes[newNote]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (Number.isInteger(parseInt(req.params.id)) && parseInt(req.params.id) > 0) {
    if (req.params.id in notes.notes) {
      delete notes.notes[req.params.id];
      fs.writeFile('./data.json', JSON.stringify(notes, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error has occurred' });
        } else {
          res.status(204).json();
        }
      });
    } else {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  } else {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (Number.isInteger(parseInt(req.params.id)) && parseInt(req.params.id) > 0 && req.body.content !== undefined) {
    if (req.params.id in notes.notes) {
      notes.notes[req.params.id] = {
        id: req.params.id,
        content: req.body.content
      };
      fs.writeFile('./data.json', JSON.stringify(notes, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error has occurred' });
        } else {
          res.status(200).json(notes.notes[req.params.id]);
        }
      });
    } else {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content !== undefined) {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on Port 3000');
});
