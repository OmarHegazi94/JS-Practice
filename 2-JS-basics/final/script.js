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

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 32 - 6
// console.log(x, y);

// // Assignment operator works from right to left

// // More Operators
// // x = x * 2;
// x *= 2;

// console.log(x);

// x += 10;
// console.log(x);

// x = x + 1;
// x += 1;
// x++;
// x--;
// console.log(x);

/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀

*/

// var markHeight = 1.8;
// var markMass = 80;

// var johnHeight = 1.9;
// var johnMass = 90;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// var isJohnBMIHigher = johnBMI > markBMI;

// console.log("Is John's BMI higher than Mark's ? " + isJohnBMIHigher);
// console.log("MarkBMI " + markBMI, "JohnBMI " + johnBMI);

/*****************************
 * If / else statements
 */

// var firstName = "John";
// var civilStatus = "single";

// if (civilStatus === "married") {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + " will hopfully marry soon :)");
// }

// var isMarried = true;

// if (isMarried) {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + " will hopfully marry soon :)");
// }

// var markHeight = 1.8;
// var markMass = 80;

// var johnHeight = 1.9;
// var johnMass = 90;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// var isJohnBMIHigher = johnBMI > markBMI;

// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is higher than John's ");
// } else {
//   console.log("John's BMI is higher than Marks's ");
// }

// // console.log("Is John's BMI higher than Mark's ? " + isJohnBMIHigher);
// // console.log("MarkBMI " + markBMI, "JohnBMI " + johnBMI);

/*****************************
 * Boolean logic
 */

// var firstName = "John";
// var age = 16;

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager");
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + " is a young man");
// } else {
//   console.log(firstName + " is a man.");
// }

/*****************************
 * The Ternary Operator and Switch Statements
 */

// Ternary operator
var firstName = "John";
var age = 16;

age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// switch statements

var job = "instructor";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches people");
    break;
  case "driver":
    console.log(firstName + " drives cars");
    break;
  case "designer":
    console.log(firstName + " design websites");
    break;
  default:
    console.log(firstName + " does something else");
}

var age = 33;

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man");
    break;
  default:
    console.log(firstName + " is a man.");
}
