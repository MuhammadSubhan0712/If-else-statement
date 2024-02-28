// If-else condition (Rishta)

var car = prompt(
  "Enter the car you have options are\nLand_Cruiser\nCivic\nCultus\nMehran\nnone"
);
if (car == "Land_Cruiser") {
  console.log(
    "Arai!!! MaaLik foran Nikah karo :))!!...Mubarak ho\nMubarak ho:)\nMubarak ho:)\nMubarak ho:)"
  );
} else if (car == "Civic") {
  console.log("Rishta Done :}..");
} else if (car == "Cultus") {
  console.log("Baat karni parhegi kisi or ka bh aaya hua :[ ");
} else if (car == "Mehran") {
  console.log("Phoppo ne maidan maarlia bs mere rooh :(");
} else {
  console.log("Wrong_number...");
}

// --------------------------------------------------
// If-else condition (Even-Odd)
var num = +prompt("Enter your number");
if (num % 2 == 0) {
  console.log("Given number is Even i.e Divisible by 2");
} else {
  console.log("Given number is Odd i.e not divisible by 2");
}

// If-else Condition (Report_card)

var eng = +prompt("Enter your english marks");
var comp = +prompt("Enter your computer marks");
var sci = +prompt("Enter your science marks");
var math = +prompt("Enter your maths marks");
var urdu = +prompt("Enter your urdu marks");
var total = 500;
var obt = eng + comp + sci + math + urdu;
console.log("Your obtained marks are :", obt);
var per = (obt / total) * 100;
console.log("Your Percentage is :", per + "%");
if (per >= 90) {
  console.log("Your Grade is A++");
} else if (per >= 80 && per < 90) {
  console.log("Your Grade is A+");
} else if (per >= 70 && per < 80) {
  console.log("Your Grade is A");
} else if (per >= 60 && per < 70) {
  console.log("Your Grade is B");
} else if (per >= 50 && per < 60) {
  console.log("Your Grade is C");
} else if (per >= 40 && per < 50) {
  console.log("Your Grade is D");
} else {
  console.log("Your grade is E");
  console.log("You're failed");
}
