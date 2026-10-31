//Question 6: Shopping Bill (10 Marks)

var price1 = +prompt("Product 1:");
var price2 = +prompt("Product 2:");
var price3 = +prompt("Product 3:");

var totalPrice = price1 + price2 + price3;
var discountedAmount = totalPrice * 0.10; // 10% discount
var finalPrice = totalPrice - discountedAmount;

console.log("Total Price:", totalPrice);
console.log("Discount:", discountedAmount);
console.log("Final Price:", finalPrice);