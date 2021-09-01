var $dotControl = document.querySelector('.dot-light');
var $background = document.querySelector('.background');

$dotControl.addEventListener('click', function (event) {
  var control;
  if ($dotControl.classList.contains('on')) {
    control = 'off';
  } else {
    control = 'on';
  }
  $dotControl.className = 'dot-light ' + control;
  $background.className = 'background ' + control;
});
