
const dateInput = document.getElementById("date")
const batteryLevel = document.getElementById("battery-level");
const passwordInput = document.getElementById("password")
const body = document.querySelector("body")

dateInput.innerText = moment().format("ddd D MMM h:mm A");

setInterval(() => {
  //set date
dateInput.innerText = moment().format("ddd D MMM h:mm A");
}, 1000*60 );
//1 minute



document.addEventListener('click', ()=>{

})