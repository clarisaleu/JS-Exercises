const account1 = {
  name: 'Jen',
  totalAmount: 5000,
  deductAmount: function(amount) {
    this.totalAmount -= amount;
    return 'Amount in account: ' + this.totalAmount;
  }
};

const account2 = {
  name: 'James',
  totalAmount: 8000
};

const withdrawFromAccount = function(amount) {
  return account1.deductAmount.bind(account2, amount); // bind account1's this context with account2 obj.
};

console.log(withdrawFromAccount(500)()); // Amount in account: 7500
console.log(withdrawFromAccount(200)()); // Amount in account: 7300
