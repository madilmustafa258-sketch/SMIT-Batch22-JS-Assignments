//Question 4: Legal and Illegal Variables (5 Marks)

//Legal variable names
var studentName = "Ali";   //Reason= Legal variable name because it starts with a letter and contains only letters.
var __totalMarks = 100;   //Reason= Legal variable name because names are allowed to start with an underscore (_).
var $price= 50;           //Reason= Legal variable name because names are allowed to start with a dollar sign ($).
var userAge= 20;         //Reason= Legal variable name because it starts with a letter and contains only letters.
var total_amount= 500;   //Reason= Legal variable name because it starts with a letter and contains only letters and underscores.

//Illegal variable names
// var 1stStudent    //Reason= Illegal variable name because variable names cannot start with a number.
// var my-name      //Reason= Illegal variable name because variable names cannot contain hyphens (-).
// var class        //Reason= Illegal variable name because class is a reserved keyword in JavaScript.
// var first name  //Reason= Illegal variable name because variable names cannot contain spaces.
// var let         //Reason= Illegal variable name because let is a reserved keyword in JavaScript.

//correcting illegal variable names
var firstStudent = "Ali";       // Corrected from '1stStudent'
var myName = "Sara";            // Corrected from 'my-name'
var myClass = "10th";           // Corrected from 'class'
var firstName = "Zainab";       // Corrected from 'first name'
var userLet = "Test";           // Corrected from 'let'

console.log("Legal Variable Names:");
console.log("Student Name:", studentName);
console.log("Total Marks:", __totalMarks);
console.log("Price:", $price);
console.log("User Age:", userAge);
console.log("Total Amount:", total_amount);

console.log("Corrected Illegal Variable Names:");
console.log("First Student:", firstStudent);
console.log("My Name:", myName);
console.log("My Class:", myClass);
console.log("First Name:", firstName);
console.log("User Let:", userLet);