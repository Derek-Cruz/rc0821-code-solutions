const express = require('express');
const path = require('path');

const app = express();

const publicDir = path.join(__dirname, 'public');

const publicFiles = express.static(publicDir);

app.use(publicFiles);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
