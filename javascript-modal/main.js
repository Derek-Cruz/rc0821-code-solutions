var $modal = document.querySelector('.open-btn');
var $hidden = document.querySelector('.hidden');
var $closeModal = document.querySelector('.close-btn');

$modal.addEventListener('click', function (event) {
  var test = $hidden;
  if (test.style.display === 'none' || test.style.display === '') {
    test.style.display = 'block';
  } else {
    test.style.display = 'none';
  }
});

$closeModal.addEventListener('click', function (event) {
  var test = $hidden;
  if (test.style.display === 'block') {
    test.style.display = 'none';
  } else {
    test.style.display = 'block';
  }
});
