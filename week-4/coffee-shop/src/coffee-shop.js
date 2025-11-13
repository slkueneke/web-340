//coffee-shop.js

const EventEmitter = require("events");

class CoffeeShop extends EventEmitter {
  constructor() {
    super();
    this.orderQueue = [];
  }

  placeOrder(order) {
    this.orderQueue.push(order);
    this.emit("orderPlaced", order);
  }

  completeOrder(order) {
    const completeOrder = this.orderQueue.shift();
    this.emit("orderReady", completeOrder);
  }
}

const coffeeShop = new CoffeeShop(); //creates a new CoffeeShop object

coffeeShop.on("orderPlaced", (order)=> {
  console.log(` Order placed: ${order} `);
  console.log(` Order queue: ${coffeeShop.orderQueue.join(", ")}`);
  //notify the barista to prepare the coffee
  //print the receipt
});

coffeeShop.on("orderReady", (order)=> {
  console.log(` Order ready: ${order} `);
  //inform the customer their order is ready
});

//place some orders
coffeeShop.placeOrder("latte");
coffeeShop.placeOrder("cappuccino");

//complete an order
coffeeShop.completeOrder();