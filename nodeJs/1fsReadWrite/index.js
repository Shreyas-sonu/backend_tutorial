// console.log("hello menoj")
const fs = require("fs"); // fs stands for file system to access remote files (as per docs)

//To read file
const read = fs.readFileSync("./rwFile/read.txt", "utf-8");
const read2 = fs.readFileSync("./rwFile/write.txt", "utf-8");
// to write a file
fs.writeFileSync("./rwFile/write.txt", "\n yaha kal kya ho kisne jana") // this will replace file
console.log(read)
console.log(read2)
// fs.copyFileSync("file1.txt","file2.txt") // this copies the file1 as file2(makes a copy)