/* 1: Basic Syntax and Variables
Create a variable named myName and assign it your name as a string.
Create a variable named age and assign it your age as a number.
Create a variable named isStudent and assign it a boolean value indicating whether you are a student or not.
Print all three variables to the console. */

let myName = "Timo";
let myAge = 33;
let isStudent = false;

console.log(myName, myAge, isStudent)

/* 2: Data Types
Create an array named favoriteFoods and populate it with three of your favorite foods.
Create an object named person with properties for name, age, and hobbies (an array of your hobbies).
Print the person object and favoriteFoods array to the console. */

const favoriteFoods = ["Pizza", "Manakish", "Steak"];

const person = {
    name: "Timo",
    age: "33",
    hobbies: "Javascript",
}

console.log(favoriteFoods, person)

/*3: Conditions
Write a function named checkAge that takes an age as a parameter and prints "Adult" if the age is 18 or older, and "Minor" if the age is under 18.
*/

const age = 20;

function checkAge (age) {
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    };
}

checkAge(age);

/* 4: Loops
Write a for loop that prints the numbers from 1 to 10.
Write a while loop that prints the numbers from 10 to 1. */

for (let r = 1; r < 11; r++) {
    console.log(r);
}

let n = 10;
while (n > 0) {
  console.log(n);
  n--;
}

/* 5: Functions
Write a function named add that takes two numbers as parameters and returns their sum.
Write a function named greet that takes a name as a parameter and prints a greeting message. */ 

let t = 2;
let d = 4;

function add (t, d) {
    let w = t + d;
    console.log(w);
}

add(t, d)

const yourName = "World";

function greet(yourName) {
    console.log("Hello " + yourName);
}

greet(yourName)

/* 6: Combining Everything
Create a function named createPerson that takes name, age, and hobbies as parameters and returns an object with those properties.
Create a function named describePerson that takes a person object and prints a description of the person (descriping the person's name, age and hobbies). */

let a = person.name;
let b = person.age;
let c = person.hobbies;

function createPerson(a, b , c) {
    console.log(a, b, c)
}

createPerson(a, b, c)

function describePerson(a, b, c) {
    console.log("This ist " + a);
    console.log("He is " + b + " years old.")
    console.log("His hobbies are " + c)
}

describePerson(a, b, c)