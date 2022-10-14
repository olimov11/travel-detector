var fizzNumber = document.querySelector(".fizz");
var buzzNumber = document.querySelector(".buzz");
var fizzBuzzNumber = document.querySelector(".fizzbuzz");
var fizzList = document.querySelector(".fizz-list");
var buzzList = document.querySelector(".buzz-list");
var fizzBuzzList = document.querySelector(".fizzbuzz-list");

var userNumber = prompt("Enter a number", 0) - 0;
var fizz = 0;
var buzz = 0;
var fizzBuzz = 0;

for (var i = 1; i <= userNumber; i++) {
   var elLi = document.createElement("li");
   elLi.textContent = i;
   if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzz += 1
      fizzBuzzList.append(elLi)
   } else if (i % 3 === 0) {
      fizz += 1
      fizzList.append(elLi)
   } else if (i % 5 === 0) {
      buzz += 1
      buzzList.append(elLi)
   }
}
fizzNumber.textContent = fizz;
buzzNumber.textContent = buzz;
fizzBuzzNumber.textContent = fizzBuzz;
