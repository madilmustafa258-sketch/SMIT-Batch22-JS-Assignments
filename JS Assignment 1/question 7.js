//Question 7: Mathematical Expression (10 Marks)

//Explanation: Multiplication has higher priority than addition
// Step 1: 5 * 2 = 10
// Step 2: 10 + 10 = 20
var A = 10 + 5 * 2;
console.log("A = 10 + 5 * 2 =", A);

//Explanation: Parentheses have higher priority than multiplication
// Step 1: 10 + 5 = 15
// Step 2: 15 * 2 = 30
var B = (10 + 5) * 2;
console.log("B = (10 + 5) * 2 =", B);

//Explanation: Division and multiplication have the same priority, so we evaluate from left to right
// Step 1: 20 / 2 = 10
// Step 2: 3 * 4 = 12
// Step 3: 10 + 12 = 22
// Step 4: 22 - 5 = 17
var C = 20 / 2 + 3 * 4 - 5;
console.log("C = 20 / 2 + 3 * 4 - 5 =", C);

//Explanation: Parentheses have the highest priority, followed by multiplication and division, and then addition and subtraction
// Step 1: 8 - 3 = 5
// Step 2: 2 * 5 = 10
// Step 3: 10 / 5 = 2
// Step 4: 5 + 2 = 7
var D = 5 + 2 * (8 - 3) / 5;
console.log("D = 5 + 2 * (8 - 3) / 5 =", D);

//Explanation: Modulus has the same priority as multiplication and division, so we evaluate from left to right
// Step 1: 30 % 4 = 2
// Step 2: 6 * 2 = 12
// Step 3: 2 + 12 = 14
var E = 30 % 4 + 6 * 2;
console.log("E = 30 % 4 + 6 * 2 =", E);