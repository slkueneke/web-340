/**
 * Author: Shannon Kueneke
 * Date:  November 12, 2025
 * File Name: taco-stand.js
 * Description: taco stand modules
 */
"use strict";

const EventEmitter = require("events");


class TacoStandEmitter extends EventEmitter {
  constructor() {
    super();
    this.customer = "";
    this.taco = "";
    this.rush = "";
  }

  serveCustomer(customer) {
    this.customer = customer;
    this.emit("serve", customer);
  }

  prepareTaco(taco) {
    this.taco = taco;
    this.emit("prepare", taco);
  }

  handleRush(rush) {
    this.rush = rush;
    this.emit("rush", rush);
  }
}

module.exports = TacoStandEmitter;