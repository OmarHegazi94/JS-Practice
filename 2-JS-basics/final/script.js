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
// var firstName = "John";
// var age = 16;

// age >= 18
//   ? console.log(firstName + " drinks beer.")
//   : console.log(firstName + " drinks juice.");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

// // switch statements

// var job = "instructor";
// switch (job) {
//   case "teacher":
//   case "instructor":
//     console.log(firstName + " teaches people");
//     break;
//   case "driver":
//     console.log(firstName + " drives cars");
//     break;
//   case "designer":
//     console.log(firstName + " design websites");
//     break;
//   default:
//     console.log(firstName + " does something else");
// }

// var age = 33;

// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy.");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager.");
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + " is a young man");
//     break;
//   default:
//     console.log(firstName + " is a man.");
// }

/*****************************
 * Truthy and Falsy values and equality operators
 */

//  falsy values: undefined, null, 0, '', NaN

//  truthy values: Not falsy values

// var height;
// height = 23;

// if (height || height === 0) {
//   console.log("Variable is defined");
// } else {
//   console.log("Variable has NOT been defined");
// }

// // Equality operators

// if (height == "23") {
//   console.log("The == operator does types coercion");
// }

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var JohnTeamAverage = (89 + 120 + 999) / 3;
var MikeTeamAverage = (116 + 94 + 200) / 3;
var MaryTeamAverage = (97 + 134 + 105) / 3;

if (JohnTeamAverage > MikeTeamAverage && JohnTeamAverage > MaryTeamAverage) {
  console.log("John's Team Wins " + JohnTeamAverage);
} else if (
  JohnTeamAverage === MikeTeamAverage &&
  JohnTeamAverage === MaryTeamAverage
) {
  console.log(
    "Draw !! John's and Mike's and Mary's Teams Scored " + JohnTeamAverage
  );
} else if (
  MaryTeamAverage > JohnTeamAverage &&
  MaryTeamAverage > MikeTeamAverage
) {
  console.log("Mary's Team Wins " + MaryTeamAverage);
} else {
  console.log("Mike's Team Wins " + MikeTeamAverage);
}
