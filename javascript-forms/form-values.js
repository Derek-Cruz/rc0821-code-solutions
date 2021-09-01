var $contact = document.querySelector('form');

$contact.addEventListener('submit', function (event) {
  event.preventDefault();
  var object = {};
  object.name = $contact.elements.name.value;
  object.email = $contact.elements.email.value;
  object.message = $contact.elements.message.value;
  console.log('object results:', object);
  $contact.reset();
});
