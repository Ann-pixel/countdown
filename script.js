// alert("Baaaaaaaaaaaaa! Youre on! 🎇");
// console.log("Hi there!");
const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdown-form");
const dateEl = document.getElementById("date-picker");
let countdownTitle = "";
let countdownDate = "";
// Set date input min with todays data
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

function updateCountdown(evt) {
  evt.preventDefault();
  countdownTitle = evt.srcElement[0].value;
  countdownDate = evt.srcElement[1].value;
}

countdownForm.addEventListener("submit", updateCountdown);
