// // fs module default aako hunchha
// //  npm bata insatll garnu pardaina
// const fs = require("fs");
// const reader = (path) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(`err in reading file,:Error :- ${err}`);
//     }
//     console.log(data.toString("utf-8"));
//     // by defaukt utf-8
//   });
// };
// const dataFromfile = fs.readFileSync(`hello.txt`, { encoding: "utf-8" });
// console.log(dataFromfile, "hello1 hello1");
// reader("hello.txt");
// fs.appendFile(`hello.txt`, "And i live in kathmandu nepal", (err) => {
//   if (err) {
//     console.log(`err in reading file,:Error :- ${err}`);
//   }
// });
// reader("hello.txt");
// fs.writeFile(
//   `hello1.txt`,
//   "This is file written from node js application",
//   (err) => {
//     if (err) {
//       console.log(`err in reading file,:Error :- ${err}`);
//     }
//   }
// );
// reader("hello1.txt");
// fs.unlink(`hello1.txt`, (err) => {
//   if (err) {
//     console.log(`err in reading file,:Error :- ${err}`);
//   }
// });

console.log(process.argv);
