//Section D — Logic Challenge (20 Marks)
//Question 11: Currency Converter (10 Marks)

var moneyAmountPkr = +prompt("Enter the amount in PKR:");
var usdExchangeRate = 280; // 1 USD = 280 PKR
var usdcoversion = moneyAmountPkr / usdExchangeRate;
console.log("Equivalent USD:","$" + usdcoversion);