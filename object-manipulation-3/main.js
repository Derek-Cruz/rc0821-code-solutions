console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Derek Cruz'
  },
  {
    name: 'Brett Albright'
  },
  {
    name: 'Scott Bowler'
  },
  {
    name: 'Tim Horist'
  }
];

var suits = ['Spades', 'Diamonds', 'Club', 'Heart'];
var values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var deck = [];

for (var suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
  for (var valuesIndex = 0; valuesIndex < values.length; valuesIndex++) {
    var card = { Value: values[valuesIndex], Suit: suits[suitsIndex] };
    deck.push(card);
  }
}

for (var getCard = deck.length - 1; getCard > 0; getCard--) {
  var testing = Math.floor(Math.random() * getCard);
  var temp = deck[getCard];
  deck[getCard] = deck[testing];
  deck[testing] = temp;
}

for (var dealCard = 0; dealCard < players.length; dealCard++) {
  players[dealCard].hand = deck.splice(0, 2);
}

// function getScores(handValue) {
//   for (var i = 0; i < players.length; i++) {
// /
//   }
// }
// var result = getScores(players[i].hand);
// players[].playerScore =
