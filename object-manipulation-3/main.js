console.log('Lodash is loaded:', typeof _ !== 'undefined');

const deck = [];
const players = [
  {
    name: 'Derek Cruz',
    hand: [],
    score: null
  },
  {
    name: 'Brett Albright',
    hand: [],
    score: null
  },
  {
    name: 'Scott Bowler',
    hand: [],
    score: null
  },
  {
    name: 'Tim Horist',
    hand: [],
    score: null
  }
];

function createDeck(type) {
  for (let deckSort = 1; deckSort < 11; deckSort++) {
    deck.push({ rank: deckSort, suit: type });
  }
  deck.push({ rank: 'A', suit: type });
  deck.push({ rank: 'K', suit: type });
  deck.push({ rank: 'Q', suit: type });
  deck.push({ rank: 'J', suit: type });
}

createDeck('spades');
createDeck('diamonds');
createDeck('hearts');
createDeck('clubs');

const shuffled = _.shuffle(deck);

let testing = 0;
for (let i = 0; i < players.length; i++) {
  for (let handIndex = testing; handIndex <= testing + 1; handIndex++) {
    players[i].hand.push(shuffled[handIndex]);
  }
  testing += 2;
}

let score = 0;

function getFirstValue(rank) {
  (rank === 'J' || rank === 'K' || rank === 'Q')
    ? score = 10
    : (rank === 'A')
        ? score = 11
        : score = rank;
  return score;
}

function getSecondValue(rank) {
  (rank === 'J' || rank === 'K' || rank === 'Q')
    ? score = 10
    : (rank === 'A')
        ? score = 11
        : score = rank;
  return score;
}

for (let i = 0; i < players.length; i++) {
  const cardOne = getFirstValue(players[i].hand[0].rank);
  const cardTwo = getSecondValue(players[i].hand[1].rank);
  players[i].score = cardOne + cardTwo;
}

let winner = players[0];

for (let winnerWinner = 0; winnerWinner < players.length; winnerWinner++) {
  if (players[winnerWinner].score > winner.score) {
    winner = players[winnerWinner];
  }
}
console.log(winner);
