var timer = setInterval(automaticChange, 3000);

var $view = document.querySelector('.container');
var $viewNum = $view.getAttribute('view');
var $imgTag = document.querySelector('img');
var $dot = document.querySelectorAll('.dot');
var $arrowLeft = document.querySelector('.fa-chevron-left');
var $arrowRight = document.querySelector('.fa-chevron-right');

var allPictures = [
  { pictureNum: 1, path: 'images/001.png' },
  { pictureNum: 2, path: 'images/004.png' },
  { pictureNum: 3, path: 'images/007.png' },
  { pictureNum: 4, path: 'images/025.png' },
  { pictureNum: 5, path: 'images/039.png' }];

function nextImg() {
  $view.setAttribute('view', $viewNum);

  for (var newPicture = 0; newPicture < allPictures.length; newPicture++) {
    if ($viewNum === allPictures[newPicture].pictureNum) {
      $imgTag.setAttribute('src', allPictures[newPicture].path);
    }
  }

  for (var nextDot = 0; nextDot < $dot.length; nextDot++) {
    if ($viewNum.toString() === $dot[nextDot].getAttribute('index')) {
      $dot[nextDot].className = 'dot fas fa-circle';
    } else {
      $dot[nextDot].className = 'dot far fa-circle';
    }
  }
}

function automaticChange() {
  if ($viewNum === allPictures.length) {
    $viewNum = 0;
  }
  $viewNum++;
  nextImg();
}

$arrowLeft.addEventListener('click', function (event) {
  $viewNum--;
  if ($viewNum < 1) {
    $viewNum = allPictures.length;
  }
  nextImg();
});

$arrowRight.addEventListener('click', function (event) {
  $viewNum++;
  if ($viewNum > allPictures.length) {
    $viewNum = 1;
  }
  nextImg();
});

$view.addEventListener('click', function (event) {
  if (event.target.getAttribute('index')) {
    var $dotIndex = event.target.getAttribute('index');
    $viewNum = parseInt($dotIndex);
  }
  nextImg();
  clearInterval(timer);
  timer = setInterval(automaticChange, 3000);
});
