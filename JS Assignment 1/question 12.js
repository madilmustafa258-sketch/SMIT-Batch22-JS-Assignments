//Question 12: Salary Calculator (10 Marks)

var basicSalary = +prompt("Enter your Basic Salary:");
var houseAllowance = basicSalary * 0.20; // 20% of Basic Salary
var medicalAllowance = basicSalary * 0.10; // 10% of Basic Salary
var taxDeduction = basicSalary * 0.05; // 5% of Basic Salary
var grossSalary = basicSalary + houseAllowance + medicalAllowance;
var netSalary = grossSalary - taxDeduction;

console.log("Basic Salary: Rs." + basicSalary);
console.log("House Allowance: Rs." + houseAllowance);
console.log("Medical Allowance: Rs." + medicalAllowance);
console.log("Tax Deduction: Rs." + taxDeduction);
console.log("Gross Salary: Rs." + grossSalary);
console.log("Net Salary: Rs." + netSalary);