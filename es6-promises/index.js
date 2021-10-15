const takeAChance = require('./take-a-chance');

const derek = takeAChance('Derek');

derek.then(value => {
  console.log(value);
});

derek.catch(error => {
  console.log(error.message);
});
