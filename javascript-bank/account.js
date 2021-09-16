/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var trueOrFalse = true;
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('deposit', amount));
  } else {
    trueOrFalse = false;
  }
  return trueOrFalse;
};

Account.prototype.withdraw = function (amount) {
  var trueOrFalse = true;
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('withdrawal', amount));
  } else {
    trueOrFalse = false;
  }
  return trueOrFalse;
};

Account.prototype.getBalance = function () {
  var total = 0;
  var checkBalance = this.transactions;
  for (var balance = 0; balance < checkBalance.length; balance++) {
    if (checkBalance[balance].type === 'withdrawal') {
      total -= checkBalance[balance].amount;
    } else {
      total += checkBalance[balance].amount;
    }
  }
  return total;
};
