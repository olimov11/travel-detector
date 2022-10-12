var elWrapper = document.querySelector(".wrapper")

var userMoney = prompt('How much money you have got?');

var usd = "11.120";
var euro = "10.900";

var planeUsd = "500"
var hotelUsd = "250"
var enjoyEuro = "120"

var planeSumm = planeUsd * usd;
var hotelSumm = hotelUsd * usd;
var enjoySumm = enjoyEuro * euro;

var allCost = planeSumm * hotelSumm * enjoySumm

if (userMoney >= allCost) {
   elWrapper.innerHTML = "<strong> Have a safe trip! </strong>";
} else {
   elWrapper.innerHTML = "<strong> You don't have enough money! </strong>";
}
