const fs = require("fs");
const crypto = require("crypto");

const start = new Date();
//! trial-1 testing 4 thread pools
///////////////////////////////////////////////////////

//? This function is to encrypt the password a1='password'(string to encrypt) a2='salt'(hint to encryption password to solve encryption) a3='100000' (number of itterations) a4='1024'(key length) a5='sha512' (sample algorithm)
// crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//     console.log(new Date() - start,"password encrypted");
// })
// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//   console.log(new Date() - start, "password encrypted");
// });
// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//   console.log(new Date() - start, "password encrypted");
// });
// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//   console.log(new Date() - start, "password encrypted");
// });

// //? here there are four threads so the first four implement in almost same time and the 5th will implemented after first four
// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//   console.log(new Date() - start, "password encrypted");
// });

///////////////////////////////////////////////////////

//! trial-2 customizing number of threads
///////////////////////////////////////////////////////

//? to set the custom thread pools we can use the following syntax we can alter number
// process.env.UV_THREADPOOL_SIZE = 1; // it should be sect inside the script inside package.json file to work

// crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
//     console.log(new Date() - start,"password encrypted");
// })
// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//   console.log(new Date() - start, "password encrypted");
// });
// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//   console.log(new Date() - start, "password encrypted");
// });
// crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
//   console.log(new Date() - start, "password encrypted");
// });
///////////////////////////////////////////////////////

//! trial-3 thread blocking

crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
console.log('password 1 encrypted')

crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
console.log("password 2 encrypted");

crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
console.log("password 3 encrypted");

crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
console.log("password 4 encrypted");

setImmediate(() => console.log('im immediate'))
setTimeout(() =>{ console.log('im timeout')},2000)