import React from 'react';
import ReactDOM from 'react-dom';

const $root = document.getElementById('root');

function CustomButton() {
  return <button>Click Me!</button>;
}

ReactDOM.render(<CustomButton />, $root);
