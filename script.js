// alert("Baaaaaaaaaaaaa! Youre on! 🎇");
// console.log("Hi there!");
const countdownEl = document.getElementById("countdown");
const countdownElTitile = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");
const dateEl = document.getElementById("date-picker");
const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdown-form");
let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
// Set date input min with todays data
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);
//populate countdown and complete UI
function updateDOM() {
  const now = new Date().getTime();
  const distance = countdownValue - now;
  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);
  countdownElTitile.textContent = `${countdownTitle}`;
  timeElements[0].textContent = `${days}`;
  timeElements[1].textContent = `${hours}`;
  timeElements[2].textContent = `${minutes}`;
  timeElements[3].textContent = `${seconds}`;

  inputContainer.hidden = true;
  countdownEl.hidden = false;
}
function updateCountdown(evt) {
  evt.preventDefault();
  countdownTitle = evt.srcElement[0].value;
  countdownDate = evt.srcElement[1].value;

  //get number version of current date, update DOM
  countdownValue = new Date(countdownDate).getTime();

  updateDOM();
}

countdownForm.addEventListener("submit", updateCountdown);
