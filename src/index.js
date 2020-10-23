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
