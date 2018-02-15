// Print sum of total

var argv = process.argv
var total = 0

//loop through from 2nd item to last. First two ara just file paths
for (i=2; i < argv.length; i++) {

// this is items in array. (+argv[i] converts to number from string.)
var eachNumber = +argv[i]

// this gets the total which is 0, and pluses the items in the array (eachNumber), on each loop. 
total += eachNumber

}

//Console log outside of loop to print just the new sum total of numbers in array.
console.log("Total = " + total)

















