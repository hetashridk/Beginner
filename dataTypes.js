"use strict";

//Primitive 
let name = "Hetashri";
let age = 20;
let login = false;

//null is a standalone value:- empty value
//undefiend:- value not assign
//symbol:- to find uniqueness

//------------------------------------------------------//


// Object

console.log(typeof "Hetu");
console.log(typeof age);
console.log(typeof null); //o/p:- object
console.log(typeof undefined); //o/p:- undefined

console.log("----------------------------");

// Conversion of Datatypes
let score = "33"
console.log(typeof score);
let scoreInNumber = Number(score);  //Convert from string to number
console.log(typeof scoreInNumber);
console.log(scoreInNumber);

console.log("----------------------------");

// Conversion of Datatypes
let scored = "33aab"
console.log(typeof scored);
let scoreInNumbers = Number(scored);  //Convert from string to number
console.log(typeof scoreInNumber);
console.log(scoreInNumber);

console.log("----------------------------");

// Conversion of Datatypes
let scoredd = "null"
console.log(typeof scoredd);
let scoreInNumberss = Number(scoredd);  //Convert from string to number
console.log(typeof scoreInNumberss);
console.log(scoreInNumberss);

console.log("----------------------------");

// Conversion of Datatypes
let scoreddd = 0
console.log(typeof scoreddd);
let scoreInNumbersss = Number(scoreddd);  //Convert from string to number
console.log(typeof scoreInNumbersss);
console.log(scoreInNumbersss);

console.log("----------------------------");

// Conversion of Datatypes
let scoredddd = undefined
console.log(typeof scoredddd);
let scoreInNumberssss = Number(scoredddd);  //Convert from string to number
console.log(typeof scoreInNumberssss);
console.log(scoreInNumberssss);

console.log("----------------------------");

// Conversion of Datatypes
let scoreddddd = true
console.log(typeof scoreddddd);
let scoreInNumbersssss = Number(scoreddddd);  //Convert from string to number
console.log(typeof scoreInNumbersssss);
console.log(scoreInNumbersssss);

//Symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);  //returns false:- as it is unique


// Conversion can be Number, String, Boolean

//Primitive:- 7 types => String, Number, Boolean, null, undefined, Symbol, BigInt => they are always call by value

//Reference Type (Non-Primitve):- Arrays, Objects, Functions

//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime

//Arrays
const names = ["hetu", "hetashri", "sheetal"];
console.log(typeof names);

// Object
let desc = {
    name: "hetashri",
    subject: "math",
}
console.log(typeof desc);


//function
const myFunction = function () {
    console.log("Hello world");
}
console.log(typeof myFunction);