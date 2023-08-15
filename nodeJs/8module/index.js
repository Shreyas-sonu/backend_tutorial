// console.log(arguments);
// console.log(require('module').wrapper) //shows all wrpper function in modules
const C = require('./mod1');
let cal = new C();
console.log(cal.add(1,2))
console.log(cal.subtract(2,2))
console.log(cal.multiply(6,2))
console.log(cal.divide(4, 2))
console.log('-----------end of mod1--------')
// module 2
const Ca = require("./mod2");
let cal1 = new Ca();
console.log(cal1.add(1, 2));
console.log(cal1.subtract(2, 2));
console.log(cal1.multiply(6, 2));
console.log(cal1.divide(4, 2));
console.log("-----------end of mod2--------");

const Cal = require("./mod3");

console.log(Cal.add(1, 2));
console.log(Cal.subtract(2, 2));
console.log(Cal.multiply(6, 2));
console.log(Cal.divide(4, 2));
console.log("-----------end of mod3--------");
//here the module loaded only once because the first will be executed once'Module Loaded' but the actual content load thrice
require("./modcache")();
require("./modcache")();
require("./modcache")();
require("./modcache")();

