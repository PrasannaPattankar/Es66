// let x = 10;
// if (x == 10) {
//   let x = 20;
//   console.log(x); // 20;
// }
// console.log(x); // 10

// // var y = 10;
// // if (y == 10) {
// //   var x = 20;
// //   console.log(y);
// // }
// // console.log(y);
// var add = function add(x, y) {
//   return x + y;
// };

// console.log(add(10, 20));
// var names = ["John", "Mac", "Peter"];
// var lengths = names.map(name => name.length);

// console.log(lengths);
// function sayHi() {
//   alert("Hello");
// }

// setTimeout(sayHi, 10000);

// let timerId = setInterval(() => alert("tick"), 2000);

// // after 5 seconds stop
// setTimeout(() => {
//   clearInterval(timerId);
//   alert("stop");
// }, 5000);

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

// for (var i = 0; i < 5; i++) {
//   (function(j) {
//     setTimeout(function() {
//       console.log(j);
//     }, 1000);
//   })(i);
// }
// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }
// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i < 5; i++) {
//   (function(x) {
//     setTimeout(function() {
//       console.log(x);
//     }, x * 1000);
//   })(i);
// }

// for (var i = 0; i < 5; i++) {
//   (function(i) {
//     setTimeout(function() {
//       console.log(i);
//     }, 3000);
//   })(i);
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }
// function sumAll(...args) {
//   // args is the name for the array
//   let sum = 0;

//   for (let arg of args) sum += arg;

//   return sum;
// }

// console.log(sumAll(1)); // 1
// console.log(sumAll(1, 2)); // 3
// console.log(sumAll(1, 2, 3)); // 6

// function showName() {
//   console.log(arguments.length);
//   console.log(arguments[0]);
//   console.log(arguments[1]);

//   // it's iterable
//   // for(let arg of arguments) alert(arg);
// }

// shows: 2, Julius, Caesar
// showName("Julius", "Caesar");

// // shows: 1, Ilya, undefined (no second argument)
// showName("Ilya");

// let arr = [
//   3,
//   5,
//   1,
//   10,
//   20,
//   20,
//   30,
//   17,
//   18,
//   19,
//   20,
//   26,
//   28,
//   11,
//   7,
//   88,
//   100,
//   200
// ];
// let arr1 = [110, 120, 130];
// let merged = [0, ...arr, 2, ...arr1];
// console.log(merged);
// const numbers = [1, 2, 3, 4, 5];
// const double = numbers.map(x => x * 2);
// console.log(double);

// Example for Map function
// var officers = [
//   { id: 20, name: "Captain Piett", location: "bangalore" },
//   { id: 24, name: "General Veers", location: "Delhi" },
//   { id: 56, name: "Admiral Ozzel", location: "Kolkata" },
//   { id: 88, name: "Commander Jerjerrod", location: "Hyd" }
// ];
// const officersIds = officers.map(officer => officer.id);

// const officerLocation = officers.map(officer => officer.location);

// console.log(officersIds);
// console.log(officerLocation);
// const numbers = [1, 2, 3, 4, 5];
// const double = numbers.map(x => x * 2);
// console.log(double);

// for .. of  example

// let iterable = [10, 20, 30];

// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }

let fruits = new Set();

fruits.add("apple");
fruits.add("orange");

fruits.size;
fruits.clear();

//fruits.clear();
console.log(fruits);
console.log(fruits.size);
