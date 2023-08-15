const fs = require("fs");

// Trial 1
////////////////////////////////////////////////////////////////
// Top level

// // timer expire phase(1)
// setTimeout(() => { console.log("Timeout 1") }, 0)
// //setimmediate phase(3)
// setImmediate(() => { console.log("Immediate 1") })

// // I/O polling phase(2)
// fs.readFile("./test-file.txt", "utf-8", () => {
//     console.log("file read 1")
// })

// //top level code
// console.log("hello from app")

// trial 1 failed because the clg should be inside a event loop to follow phases
// hello from app
// Timeout 1
// Immediate 1
// file read 1
////////////////////////////////////////////////////////////////

//! trial 2

// Top level

// timer expire phase(1)
setTimeout(() => { console.log("Timeout 1") }, 0)
//setimmediate phase(3)
setImmediate(() => { console.log("Immediate 1") })
setImmediate(() => { console.log("--------------------") })

// I/O polling phase(2)
fs.readFile("./test-file.txt", "utf-8", () => {
  console.log("file read 1");
  // timer expire phase(1)
  setTimeout(() => {
    console.log("Timeout 2a");
  }, 3000);
  // timer expire phase(1)
  setTimeout(() => {
    console.log("Timeout 2");
  }, 0);
  //setimmediate phase(3)
  setImmediate(() => {
    console.log("Immediate 2");
  });
})

//top level code
console.log("hello from app")

// here the immedite executes before timeout because it considers timeout later and crosses the phase and since there are no i/o polling in that case the phases is not followed