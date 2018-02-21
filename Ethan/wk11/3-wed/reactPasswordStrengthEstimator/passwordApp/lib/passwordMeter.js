export default function getStrenght(password) {
	var strengthScore = 0;
	function checkLowercase(input) {
		 var regex = /^(?=.*[a-z]).+$/;

	        if(regex.test(input) ) {
	            strengthScore += 1;
	        }
	}
	function checkUppercase(input) {
		  var regex = /^(?=.*[A-Z]).+$/;

	        if(regex.test(input) ) {
	            strengthScore += 1;
	        }
	}
	function checkLength(input) {
		if(input.length >= 8) {
	            strengthScore += 1;
	        }
	}
	function checkNumber(input) {
	    var regex = /[0-9]/g;
		if(regex.test(input)) {
	            strengthScore += 1;
	        }
	}
	function checkSpecial(input) {
		  var regex = /^(?=.*[0-9_\W]).+$/;

	        if(regex.test(input) ) {
	           strengthScore += 1;
	        }
	}

	// check password for lowercase letter
	checkLowercase(password)
	// check password for uppercase letter
	checkUppercase(password)
	// check password for > 8 letters
	checkLength(password)
	// check password for number
	checkNumber(password)
	// check password for special character
	checkSpecial(password)

	if (strengthScore === 5) {
		return "GREAT"
	} else {
		return "NOT GOOD ENOUGH"
	}
}
