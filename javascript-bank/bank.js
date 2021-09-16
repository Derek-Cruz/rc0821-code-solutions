/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && typeof balance === 'number' && Number.isInteger(balance)) {
    var accNew = new Account(this.nextAccountNumber, holder);
    accNew.deposit(balance);
    this.accounts.push(accNew);
    this.nextAccountNumber++;
    return accNew.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var getAcc = 0; getAcc < this.accounts.length; getAcc++) {
    if (number === this.accounts[getAcc].number) {
      return this.accounts[getAcc];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var getTotal = 0; getTotal < this.accounts.length; getTotal++) {
    total += this.accounts[getTotal].getBalance();
  }
  return total;
};
