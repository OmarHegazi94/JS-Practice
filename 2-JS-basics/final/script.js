/* **************************
    Variables and data types
*/

// var firstName = "Mero";

// console.log(firstName);

// var lastName = "Hegazi";

// var age = 26;

// var job = "developer";

// console.log(job);

/* **************************
    Variable Mutation and type coercion
*/

// var firstName = "John";
// var age = 23;

// console.log(firstName + " " + age);

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     " Is he married? " +
//     isMarried
// );

// /* **************************
//     Variable Mutation ( change the value of a variable )
// */

// age = "twenty eight";
// job = "driver";

// alert(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     " Is he married? " +
//     isMarried
// );

// var lastName = prompt("What is his last Name");
// console.log(firstName + " " + lastName);

/* **************************
    Basic Operators
*/

// var year, yearJohn, yearMark;
// now = 2020;
// ageJohn = 28;
// ageMark = 33;
// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical Operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof "Mark is older the John");
// var x;
// console.log(typeof x);

/* **************************
    Operator precedence ( Which Operator is excuted first )
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 32 - 6
console.log(x, y);

// Assignment operator works from right to left

// More Operators
// x = x * 2;
x *= 2;

console.log(x);

x += 10;
console.log(x);

x = x + 1;
x += 1;
x++;
x--;
console.log(x);
