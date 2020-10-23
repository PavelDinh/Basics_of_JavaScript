import "./styles.css";

var myName = "beaue";
document.getElementById("app").innerHTML = myName;

myName = 2;

const pi = 3.14;
console.log("Hello JavaScript !" + " " + pi);

var a = 2;
var b = a;
var sum = b + a;
var diff = b - a;
console.log("Sum of A and B = " + sum + " " + diff);

// Declarations
var StUdLyCapVar;
var properCamelCase; // USE CAMEL CASE !!!!
var TitleCaseOver;

// Wrong Assignments ! Variables are Case Sensitive !
//STUDLYCAPVAR = 29;
//ProperCAmelCASE = "A String";
//TittLeCaSeOVeR = 234235;

var multiplier = 32 * 3;
var quotient = 33 / 10;
var remainder = 11 % 2;
console.log(quotient + " " + multiplier + " " + remainder);

var firstName = "Vu";
var lastName = "Hoang";

var myStr = 'I am a "double quoted" string inside "double quotes"';
console.log(myStr);

myStr = `'<a href = "http://www.example.com" target="_blank">Link</a>'`;
console.log(myStr);

/****
 CODE OUTPUT ESCAPING
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 */

myStr = "FirstLine\n\t\\SecondLine\nThirdLine\b\f\r\\\"'sdaw'\"";
console.log(myStr);

// String concatination

var myNewStr = "Another";
myStr = "Hello " + myNewStr + " World!";
console.log(myStr);

// Getting length of a string
console.log(myStr + " \\ The length of this sentence is: " + myStr.length);

// String indexes
console.log(myStr + "\\ first letter of this sentence is: '" + myStr[0] + "'");

// We cannot change individual letter in a string
// myStr[0] = "B" <- Not Working !
// You need to change the whole string

var gettingLastLetterFromMyStr = myStr[myStr.length - 1];
console.log(gettingLastLetterFromMyStr);

// FUNCTIONS
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Code logic
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb +
    ".";

  // Optional return type
  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

// Arrays
var ourArray = ["John", 23, "a", 234.65]; // CONFUSING !
var myArr = ["Quancy", 1];
var twoDArr = [
  ["Bulls", 25],
  ["White socks", 23],
  ["Cow", 345]
];

// Accessing 2D array
console.log(twoDArr[1][0]);

// Adding data to the end of an array
twoDArr.push(["happy", "Paul"]);
console.log(twoDArr[2]);

// Adding data to the start of an array
twoDArr.unshift(["Many", "Sadness"]);

// Removing data from the end of an array
twoDArr.pop();
console.log(twoDArr[2]); // Undefined is right because we deleted the element

// Removing data from the beginning of an array
console.log(twoDArr[0]);
twoDArr.shift();
console.log(twoDArr[0]);

// Accessing arrays index
var ourData = ourArray[0];
console.log(ourData);

// Arrays indexes can be modified
var myArray = [12, 4325, 3456, 23];
myArray[2] = 1;

// Shopping list
var myList = [
  ["cereal", 3],
  ["milk", 2],
  ["bananas", 3],
  ["juice", 2],
  ["eggs", 4]
];

function reusableFunc() {
  console.log("Hi Cutie !");
}

reusableFunc();

// SCOPES
var myGlobal = 10;

function fun1() {
  // Assign 5 to 'oopsGlobal'
  var oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal; // Out of scope
  }
  console.log(output);
}

fun1();
fun2();

var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater"; // Taking precedence
  return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

// Stand in Line
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Comparing IF statements
/**
 * 3 == 3 -> true
 * 3 == '3' -> true
 * 3 === 3 -> true
 * 3 === '3' -> false
 */

function compareEquality(a, b) {
  if (a == b) {
    return "Equal";
  }
  return "Not Equal";
}

function strictCompare(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));
console.log(strictCompare(10, "10"));
