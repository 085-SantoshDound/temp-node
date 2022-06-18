// const amount = 9;
// if (amount < 10) console.log("Small number");
// else console.log("large number");

// console.log(`hey this is my first program`);

// console.log("name:_");
// console.log(__dirname);
// setInterval(() => {
//   console.log("hello world");
// }, 10000);

//module

// sayHi('susan');
// sayHi(john);
// sayHi(john);
// sayHi(peter);

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);

//module
// const names = require('./4-names');
// const sayHi = require('./5-util');
// const data = require('./6-alternative-flav');
// require('./7-mindg');
// console.log('name');
// console.log('sayHi');
// console.log('data');

//os module
// const os = require('os');

// const user = os.userInfo();
// console.log(user);
// console.log(`the System Uptime is ${os.uptime()} seconds`);
// const currentOS = {
//   nsme: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOS);

//path module

// const path = require('path');
// console.log(path.sep);
// const filePath = path.join('./content/', 'subfolder', 'text.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
// console.log(absolute);

//http
// const http = require('http');
// const { clearScreenDown } = require('readline');
// //const server: http.Server;
// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('welcome');
//   }
//   if (req.url === '/contactus') {
//     res.end('here is our shot');
//   }

//   res.end(
//     `<h1>Oops!</h1>
//     <p> seems to find the page you are looking for</p>
//     <a href="/">back home </a>
//     <a href="/contactus">back contact us</a>
//     `
//   );
// });
// server.listen(5000);

//external modules

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello world');
console.log('hello people');
