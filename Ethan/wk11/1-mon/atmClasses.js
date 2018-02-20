//use node to run and check it.

var argv = process.argv
for (i=2; i < argv.length; i++) {
var withdrawOrDeposit = argv[2]
var input = +argv[3]
var checkingOrSaving = argv[4]
}

console.log(withdrawOrDeposit + " $" + input + " in my " + checkingOrSaving + " account please")

//class
class Atm {

//custom class constructor. Constructor is same as initialize.
constructor(money) {
// this.name = 'Atm'
this.balance = money

}

//methods
	showBalance() {
		console.log("Your Bank Account Has $" + this.balance)
	}

	withdraw(amount) {
		var withdrawHistory =  this.balance = this.balance - amount
		console.log(withdrawHistory)
	}

	deposit(amount) {
		var depositHistory = this.balance = this.balance + amount
		console.log(depositHistory)
	}

	// transactionHistory(amount) {
	// 	console.log()
	// }

}

let p = new Atm(0);

if (withdrawOrDeposit == "Withdraw") {
	p.withdraw(input)
} else {
	p.deposit(input)
}


p.showBalance();


// p.transactionHistory()







// var money = 0

// console.log("Bank Account Has $" + money)

// input

// input withdraw
//input deposit

// if input withdraw it takes off money 0.

// new console.log