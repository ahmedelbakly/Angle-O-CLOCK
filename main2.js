const handMinutes = document.querySelector(".minutes");
const handHour = document.querySelector(".hour");
const handSecond = document.querySelector(".second");

setInterval(function () {
  let date = new Date();
  let second = date.getSeconds();
  let min = date.getMinutes();
  let hour = date.getHours();
 
  handHour.style.transform = `rotate(${ 360 * (( hour - 12) / 12) + 90}deg)`;
  handMinutes.style.transform = `rotate(${ 360 * (min / 60) + 90}deg)`;
  handSecond.style.transform = `rotate(${ 360 * (second / 60) + 90}deg)`;
}, 1000);
