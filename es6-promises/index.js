const takeAChance = require('./take-a-chance');

const derek = takeAChance('Derek');

derek.then(value => {
  console.log('Hooray! You\'re so lucky, Derek!');
});

derek.catch(error => {
  console.log(error.message);
});
