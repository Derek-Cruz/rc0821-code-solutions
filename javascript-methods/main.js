var numberOne = 5;
var numberTwo = 22;
var numberThree = 80;

Math.max(numberOne, numberTwo, numberThree);
var maximumValue = Math.max(numberOne, numberTwo, numberThree);

console.log('maximumValueResults:', maximumValue);

var heroes = ['Eraser Head', 'Izuku Midoriya', 'Hitoshi Shinso', 'Mirio Togata'];
var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

Math.floor(randomNumber);

var randomIndex = Math.floor(randomNumber);

console.log('randomIndexResults:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHeroResults:', randomHero);

var library = [
  {
    title: 'Tokyo Revengers',
    author: 'Ken Wakui'
  },
  {
    title: 'Attack on Titan',
    author: 'Hajime Isayama'
  },
  {
    title: 'Berserk',
    author: 'Kentaro Miura'
  }
];

var lastBook = library.pop();

console.log('lastBookResults:', lastBook);

var firstBook = library.shift();

console.log('firstBookResults:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('libraryResults:', library);

var fullName = 'Derek' + ' ' + 'Cruz';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastNameResults:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyNameResults:', sayMyName);
