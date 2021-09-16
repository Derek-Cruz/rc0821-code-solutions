var counter = setInterval(countdown, 500);

function countdown() {
  var header = document.querySelector('h1');
  header.textContent--;

  if (header.textContent === '0') {
    header.textContent = '~Earth Beeloooowww Us~';
    clearInterval(counter);
  }
}
