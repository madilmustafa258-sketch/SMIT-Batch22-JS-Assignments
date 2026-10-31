//Question 10: Marks Percentage Calculator (10 Marks)

var english= +prompt("Enter your English Marks:");
var math= +prompt("Enter your Math Marks:");
var science= +prompt("Enter your Science Marks:");  
var computer= +prompt("Enter your Computer Marks:");
var pakStudies= +prompt("Enter your Pak Studies Marks:");

var obtainedMarks = english + math + science + computer + pakStudies;
var totalMarks = 500;
var percentage = (obtainedMarks / totalMarks) * 100;

console.log("Obtained Marks:", obtainedMarks);
console.log("Total Marks:", totalMarks);
console.log("Percentage:", percentage.toFixed(2) + "%");