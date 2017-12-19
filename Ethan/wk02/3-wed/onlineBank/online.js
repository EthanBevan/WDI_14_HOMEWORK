//Display
var displaySaving = document.querySelector('.displaySaving'); 
var displayChecking = document.querySelector('.displayChecking');

//withdraw
var withdrawSaving = document.querySelector('.withdrawSaving');
var withdrawChecking = document.querySelector('.withdrawSaving');

//deposit
var depositSaving = document.querySelector('.withdrawSaving');
var depositChecking = document.querySelector('.withdrawSaving');


//Inputs
var inputSaving = document.querySelector('.inputSaving');
var inputChecking = document.querySelector('.inputChecking');


function addMoneyS (){
  displaySaving.textContent = Number(displaySaving.textContent) + Number(inputSaving.value)
}

function minusMoneyS (){
  displaySaving.textContent = Number(displaySaving.textContent) - Number(inputSaving.value)
}

depositSaving.addEventListener('click',addMoneyS)
withdrawSaving.addEventListener('click',minusMoneyS)












/*
function depositOndisplaySaving () {
	if (Saving >= 0 || Checking >= 0) {
		Saving = Number(inputSaving.value) + Saving;
		displaySaving.textContent = Saving;
		inputSaving.value = "";
	}
}

function depositOndisplayChecking () {
	if (moneyOndisplayChecking >= 0 || moneyOndisplayChecking >= 0) {
		moneyOndisplayChecking = Number(inputChecking.value) + moneyOndisplayChecking;
		displayChecking.textContent = moneyOndisplayChecking;
		inputChecking.value = "";
	}
}
*/







/*
//Buttons events clicking
//withdrawSaving.addEventListener('click', withdrawOnSaving)
//withdrawChecking.addEventListener('click', withdrawOnChecking)

depositSaving.addEventListener('click', depositOndisplaySaving)
depositChecking.addEventListener('click', depositOndisplayChecking)
*/






