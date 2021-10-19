import React from 'react';
import ReactDOM from 'react-dom';

const test = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
// eslint-disable-next-line no-console
console.log('results:', test);

const $div = document.querySelector('#root');

ReactDOM.render(test, $div);
