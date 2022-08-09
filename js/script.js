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