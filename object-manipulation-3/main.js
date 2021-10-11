console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    name: 'Derek Cruz',
    hand: 0
  },
  {
    name: 'Brett Albright',
    hand: 0
  },
  {
    name: 'Scott Bowler',
    hand: 0
  },
  {
    name: 'Tim Horist',
    hand: 0
  }
];

const suits = ['Spades', 'Diamonds', 'Club', 'Heart'];
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const deck = [];

for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
  for (let valuesIndex = 0; valuesIndex < values.length; valuesIndex++) {
    const card = { Value: values[valuesIndex], Suit: suits[suitsIndex] };
    deck.push(card);
  }
}

for (let getCard = deck.length - 1; getCard > 0; getCard--) {
  const testing = Math.floor(Math.random() * getCard);
  const temp = deck[getCard];
  deck[getCard] = deck[testing];
  deck[testing] = temp;
}

function dealCards(cards) {
  for (let dealCard = 0; dealCard < players.length; dealCard++) {
    players[dealCard].hand = deck.splice(0, 2);
    // console.log('test', dealCards(players[dealCard].hand));

  }
}

dealCards(players.hand);
// console.log('test', dealCards(players.hand));

// function getScores(handValue) {
//   for (var i = 0; i < players.length; i++) {
// /
//   }
// }
// var result = getScores(players[i].hand);
// players[].playerScore =
