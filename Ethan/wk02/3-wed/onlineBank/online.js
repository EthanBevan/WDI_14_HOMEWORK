//Saving
//Display
var balanceS = document.querySelector('.balanceDisplay')
//Inputs
var enterAmountS = document.querySelector('.enterAmount');
//Saving
var withdrawSaving = document.querySelector('.withdraw');
var depositSaving = document.querySelector('.deposit');

//Checking
//Display
var balanceC = document.querySelectorAll('.balanceDisplay')[1]
//Inputs
var enterAmountC = document.querySelectorAll('.enterAmount')[1]
//Checking
var withdrawChecking = document.querySelectorAll('.withdraw')[1]
var depositChecking = document.querySelectorAll('.deposit')[1]



//Saving functions to be called.

function depositS () {
 balanceS.textContent = Number(balanceS.textContent) + Number(enterAmountS.value)
}

function withdrawS () {
  balanceS.textContent = Number(balanceS.textContent) - Number(enterAmountS.value)
}


//checking functions to be called
function depositC () {
	balanceC.textContent = Number(balanceC.textContent) + Number(enterAmountC.value)
}

function withDrawC () {
	balanceC.textContent = Number(balanceC.textContent) - Number(enterAmountC.value)
}

//Checking
withdrawChecking.addEventListener('click',withDrawC)
depositChecking.addEventListener('click',depositC)

//Saving
withdrawSaving.addEventListener('click', withdrawS)
depositSaving.addEventListener('click', depositS)


















/*

var balance = document.querySelector('.displaySaving'); 

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
//withdrawSaving.addEventListener('click',minusMoneyS)




*/








