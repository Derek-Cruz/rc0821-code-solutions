var $nameInput = document.querySelector('#user-name');
var $emailInput = document.querySelector('#user-email');
var $msgInput = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
}

$nameInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('focus', handleFocus);
$msgInput.addEventListener('focus', handleFocus);

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
}

$nameInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('blur', handleBlur);
$msgInput.addEventListener('blur', handleBlur);

function handleInput(event) {
  console.log('event.target.name results:', event.target.name);
  console.log('value of name:', event.target.value);
}

$nameInput.addEventListener('input', handleInput);
$emailInput.addEventListener('input', handleInput);
$msgInput.addEventListener('input', handleInput);
