// console.log("hello menoj")
const fs = require("fs"); // fs stands for file system to access remote files (as per docs)
fs.copyFileSync("file1.txt","file2.txt") // this copies the file1 as file2(makes a copy)