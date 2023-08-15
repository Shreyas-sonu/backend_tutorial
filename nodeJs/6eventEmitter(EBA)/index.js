const EventEmitter = require('events');

//! w/o Class
// const myEmitter = new EventEmitter();

// myEmitter.on('sale', () => {
//     console.log('there is new sale')
// })
// myEmitter.on("sale", (x) => {
//   console.log(`customer is ${x}`);
// });
// myEmitter.on("sale", (x,y) => {
//   console.log(`stock left is ${y}`);
// });
// //  emitting event
// myEmitter.emit('sale', 'Menoj Degar', 9) // last two are used passed as argument for CB

//! with class
class Sales extends EventEmitter{
    constructor() {
        super()
    }
}

const myEmitter=new Sales()

myEmitter.on('sale', () => {
    console.log('there is new sale')
})
myEmitter.on("sale", (x) => {
  console.log(`customer is ${x}`);
});
myEmitter.on("sale", (x,y) => {
  console.log(`stock left is ${y}`);
});
//  emitting event
myEmitter.emit('sale', 'Menoj Degar', 9) // last two are used passed as argument for CB
