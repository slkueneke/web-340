//saving-account.js MODULES

/*
always write listener before you emit the event
  .emit() == emit evt
  .on() == listener
*/

const EventEmitter = require("events");

//make new BankAccount class extending EventEmitter functionality
class BankAccount extends EventEmitter {
  //constructor() called automatically; super() calls og EventEmitter so we can use the methods here; initialize balance to $0
  constructor() {
    super();
    this.balance = 0;
  }

  //make deposit method which emits "deposit" event with amount
  deposit(amount) {
    this.balance += amount;
    this.emit("deposit", amount);
  }

  //make withdraw method -- if withdrawn amount is less than balance, emit "withdraw" with balance; else emit "insufficientFunds" with balance
  withdraw(amount) {
    if (amount > this.balance) {
      this.emit("insufficientFunds", amount);
    } else {
      this.balance -= amount;
      this.emit("withdraw", amount);
    }
  }
}

const account = new BankAccount(); //create a new BankAccount obj

//evt listener for deposit evt
account.on("deposit", (amount) => {
  console.log(` Deposited ${amount}. New balance: ${account.balance}`);
});

//evt listener for withdraw evt
account.on("withdraw", (amount) => {
  console.log(` Withdrew ${amount}. New balance: ${account.balance}`);
});

//evt listener for insufficientFunds evt
accounts.on("insufficientFunds", (amount) => {
  console.log(` Attempted to withdrawn ${amount}, but only ${account.balance} available.`);
});

//perform some actions
account.deposit(100);
account.withdraw(50);
account.withdrawn(60);
