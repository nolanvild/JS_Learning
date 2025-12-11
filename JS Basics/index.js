// This is a comment boi to document your stuff
console.log('Hello World');

// we use let instead of var 
let i = "I'll name my variables whatever I want";
console.log(i);

// Constants
const interestRate = 0.3;
// interestRate = 1; // this will throw an error because const cannot be changed
console.log(interestRate);

//Primitive (Value) Types
// Strings, numbers, booleans, undefined, null

// Dynamic Typing
// Type of a variable can change at runtime
let name = 'Test';
// This can be changed to a different type of variable such as a number

//Objects
let person = {
    name: 'Mango',
    age: 10000
};
console.log(person);

// Dot notation -> default choice
person.name = 'Frank';
console.log(person);

// Bracket notation -> used when variable is an input
let selection = 'name';
person[selection] = 'Mary';
console.log(person);

// Arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors)
console.log(selectedColors[0]);

selectedColors[2] = 'green' //length is also dynamic
console.log(selectedColors);

selectedColors[3] = 4; //elements do not have to be the same datatype
console.log(selectedColors);
console.log(selectedColors.length);

// Functions -> this performs a task
function greet(name1, name2) {
    console.log("This is a greeting to " + name1 + ' ' + name2);
} // note there is no semicolon here

greet('John Doe', 'Smith');
greet('Johnny Boy', 'Chris');

function square(number) {
    return number * number;
}
let number = square(9);
console.log(number)

let house = {
    bathrooms: 5,
    bedrooms: 4,
    kitchens: 1
};

console.log("The number of bathrooms is " + house.bathrooms);
let room = 'kitchens'
console.log("The number of " + room + " is " + house[room]);
room = 'bathrooms'
console.log("The number of " + room + " is " + house[room]);

// set of rooms that I need to check
room1 = 'bedrooms'
room2 = 'kitchens'