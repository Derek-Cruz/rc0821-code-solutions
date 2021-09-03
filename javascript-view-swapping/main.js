var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var containers = 0; containers < $tab.length; containers++) {
      if ($tab[containers] === event.target) {
        $tab[containers].className = 'tab active';
      } else {
        $tab[containers].className = 'tab';
      }
    }
  }
  var $dataView = event.target.getAttribute('data-view');
  for (var dataTarget = 0; dataTarget < $view.length; dataTarget++) {
    if ($view[dataTarget].getAttribute('data-view') === $dataView) {
      $view[dataTarget].className = 'view';
    } else {
      $view[dataTarget].className = 'view hidden';
    }
  }
});
