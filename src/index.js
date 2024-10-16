"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("./style.css");

class App {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
exports.App = App;

const App1 = new App("Weather");

console.log(`${App1.getName()} is in the app.`);
