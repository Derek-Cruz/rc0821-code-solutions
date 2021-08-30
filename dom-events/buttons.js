var $click = document.querySelector('.click-button');
var $hover = document.querySelector('.hover-button');
var $double = document.querySelector('.double-click-button');

$click.addEventListener('click', handleClick);
$hover.addEventListener('mouseover', handleMouseOver);
$double.addEventListener('dblclick', handleDoubleClick);

function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
