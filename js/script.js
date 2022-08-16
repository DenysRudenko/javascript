"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// // Old example of using variables

// console.log(name);
// var name = 'Ivan';

// {
//     let result = 50;
// }

// // Variables p.2

// const vehicleBodyWidth = 5000;
// const vehicleBodyLenght = 4000;

// console.log("Width of the car: " + vehicleBodyWidth + ', length: ' + vehicleBodyLenght);

// // difference between arrays and obj



// const array = [1, 2, 3];
// const arrObj = {
//     0: 'a',
//     1: 'b',
//     2: 'c'
// };

// // const obj2 = { a: 1, b: 2 };

// console.log(array[1]);
// console.log(arrObj[1]);

// const onj2 = {
//     "Anna": 500,
//     "Alice": 800
// };



// // Numbers

// let SecondNumber = 4.6;

// console.log(-4 / 0);
// console.log('string' * 9);

// const person = "Alex";

// const bool = false;

// // console.log(something);

// let und;
// console.log(und);

// const object = {
//     name: "Sasha",
//     age: 25,
//     isMarried: false
// };

// console.log(object.name);

// let arr = ['plum.png', 'orange.png', 'apple.jpg', 6];
// console.log(arr[1]);

// Simple speaking with a user.

// alert("Heloooooo!");


// const result = confirm("Are you here?");

// const answer = prompt("Are you 18?", "");
// console.log(typeof(answer));


// const answers = [];

// answers[0] = prompt('What is your name?', "");
// answers[1] = prompt('What is your surename?', "");
// answers[2] = prompt('How old are you?', "");

// document.write(answers);

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Denys';




// alert(`Hello${user}`);

// console.log('arr' + ' - object');
// console.log(4 + '5');

// let incr = 10,
//     dcr = 10;

// incr++;
// dcr--;

// console.log(incr);
// console.log(dcr);

//------------------------------------------------------------------
// Asking a user for about movies and asking him to type his answer.
// const numberOfFilms = +prompt("How much films have you wached?", "");

// // Creating constanta with a number of films user wathed, which movies, what actors and genres.
// const personalMoviesDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [
        
//     ],
//     privat: false
// };

// // Asking the user additional questions.
// const a = prompt("What is the name of last movie you saw?", ""),
//     b = +prompt("Vote your grade for movie, from 1 to 10!", ""),
//     c = +prompt("How much films have you watched?", ""),
//     d = prompt("What is the name of last movie you saw?", "");


// // Writing the user answer data into personalMovieDB.movies const.    
// personalMoviesDB.movies[a] = b;
// personalMoviesDB.movies[c] = d;

// console.log(personalMoviesDB);

//--------------------------------------------------------------------------------------
// If else

// if (4 == 9) {
//     console.log("Ok");
// } else {
//     console.log("Error");
// }

// const num = 50;

// if (num < 49) {
//     console.log("error");
// } else if (num > 100) {
//     console.log("Too much");
// } else {
//     console.log("Okay!");
// }


// ternary operator

// (num === 50) ? console.log("Ok!") : console.log("Error");

// switch (num) { // If num
//     case 49:        // equals 49
//         console.log("Incorrect");       // then show that in console
//         break;          // pause
//     case 100:
//         console.log("Incorrect");
//         break;
//     case 50:
//         console.log("Right!");
//         break;
//     default:
//         console.log("Not right time");
// }

//  Logical operators

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("You can order that meal!");
// } else {
//     console.log("We`re leaving!");
//  }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 0;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log("Everyone got a meal");
// } else {
//     console.log("We are leaving!");
// }

// let johnReport, alexReport, samReport, mariaReport = "done";

// console.log((johnReport || alexReport || samReport || mariaReport));

// console.log(!0);

// console.log( NaN || 2 || undefined );

// console.log( NaN && 2 && undefined );

// console.log( 1 && 2 && 3 );

// console.log(!1 && 2 || !3);

// console.log(25 || null && !3);

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || null && !3 && undefined || 5);

// console.log(5 === 5 && 3 > 1 || 5);

// let num = 50;


// First style of while!!!
// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// Secont style of while
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// Third style of while!

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }

// Cycle in cycles

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; i < 3; j++){
//         console.log(j);
//     }
// }

// *
// **
// ***
// ****
// *****

// let result = "";
// const len = 7;

// for (let i = 1; i < len; i++){

//     for (let j = 0; j < i; j++){
//         result += "*";
//     }

//     result += "\n";
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++){
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++){
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// function firstTask() {
//     for (let i = 5; i < 11; i++){
//         console.log(i);
//     }
// }

// firstTask();

// console.log("-" * 10);

// function secondTask() {
//     for (let i = 20; i >= 10; i--){
//         if (i === 13) break;
//         console.log(i);
//     }
// }

// secondTask();

// console.log("-" * 10);

// function thirdTask() {
//     for (let i = 2; i <= 10; i++){
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// thirdTask();

// console.log('-' * 10);

// function fourthTask() {
//     let i = 2;

//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }

// fourthTask();


// function fiftTask() {
//     const arrayofNumbers = [];

//     for (let i = 5; i < 11; i++){
//         arrayofNumbers[i - 5] = i;
//     }

//     console.log(arrayofNumbers);
//     return arrayofNumbers;
// }

// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr; i++){
//         result[i] = arr[i];
//     }
    
//     console.log(result);
//     return result;
    
// }

// firstTask();


// function

// let num = 20;

// function showFristMessage(text) {
//     console.log(text);
//     let num = 10;

// }

// showFristMessage("Hello world!");
// console.log(num);


// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));


// function ret() {
//     let num = 50;

//     //

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// // function expression

// const logger = function () {
//     console.log("hello");  
// };

// logger();

// const calc1 = (a, b) => a + b;

// const cal2 = (a, b) => {
//     console.log('1');
//     return a + b;
// }


// Function arguments

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log( result * discount );

// }


// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++){
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log("Done");
// }

// test();


// Empty function!!!

// function doNothing() {
// };

// console.log(doNothing() === undefined);

// Homework for fucntions

// function sayHello(name) {
//     return `Привет,${name}!`;
// }

// sayHello('Антон');


// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);



// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// getMathResult(5, 3);
// getMathResult(3, 10);
// getMathResult(10, 5);
// getMathResult(10, '5');
// getMathResult(10, 0);
// getMathResult(20, -5);

// const str = "test";
// const arr = [1, 2, 4];

// console.log(str.toUpperCase());

// const fruit = "Some Fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello";

// console.log(logg.slice(2, 6));

// сonsole.log(logg.substring(2, 6));

// console.log(logg.substr())

// const num3 = 12.2;

// console.log(Math.round(num3));

// const test = "12.2px";

// console.log(parsInt(test));

// function calculateVolumeAndArea(length) {
//     if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return 'При вычислении произошла ошибка';
//     }

//     let volume = 0;
//         area = 0;

//     volume = lenght * lenght * lenght;
//     // forumula of qube volume

//     area = 6 * (lenght * length);

//     return `Обьем куба: ${volume}, площадь всей поверхности : ${area}`;
// }

// формула обьема длина в кубе

// function first() {
//     // Do something

//     setTimeout(function () {
//         console.log(1)
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();

// second();

// function learnJs(lang, callback) {
//     console.log(`Я учу: ${lang}.`);
//     callback();
// }

// function done() {
//     console.log('I finished that lesson!');
// }

// learnJs('JavaScript', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };


// let counter = 0;

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i}, has meaning ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Property ${key}, has meaning ${options[key]}`);
//         counter++;
//     }
// }


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// };

// console.log(options.name);

// delete options.name;

// console.log(options);

// console.log(Object.keys(options).length);

// options.makeTest();

// const { border, bg } = options.colors;


// const arr = [1, 2, 3, 6, 8];

// arr.pop();

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// // arr[99]

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} inside massive ${arr}`);
// });

// const str = prompt("", '');
// const products = str.split(", ");
// console.log(products);

// products.sort();

// function compareNum(a, b) {
//     return a - b;
// }

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);

// const add = {
//     d: 17,
//     e: 20,

// };

// console.log(Object.assign(numbers, add));

// CloseEvent.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube', 'video', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];


// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2,
// };

// const newObj = {
//     ...q
// };


// let str = "some";
// let strObj = new String(str);

// console.log(tyoeof(str));
// console.log(typeof (strObj));


// let str = "some";
// let strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100
//     sayHello: function () {
//         console.log("Hello");
//     }
// };

// const jonh = {
//     health: 100
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);


// const john = Object.create(soldier);



// console.log(typepf(String(null)));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// console.log(typeof (Number('4')));

// console.log(typeof (+'5'));

// console.log(typeof (parseInt("15px", 10)));

// let answ = +prompt("Hello", '');

// // 0, "", null, undefined, NaN;

// let switcher = null;

// if (switcher) {
//     console.log("Working...");
// }

// switcher = 1;

// console.log(typeof (Boolean('44')));

// console.log(typeof (!!'44444'));


