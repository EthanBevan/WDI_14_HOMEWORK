console.log('Ethan')

//JS
1.

console.log(typeof 15)
// Prediction: integer
// Actual: number

console.log(typeof 5.5)
// // Prediction: number
// // Actual: number

console.log(typeof NaN)
// // Prediction: number
// // Actual: number

console.log(typeof "hello")
// // Prediction: string
// // Actual: string

console.log(typeof true)
// Prediction: boolean
// Actual: boolean

console.log(typeof 1 != 2)
// Prediction: boolean
// Actual: true


console.log("hamburger" + "s")
// Prediction: "hamburgers"
// Actual: "hamburgers"

console.log("hamburgers" - "s")
// Prediction: "hamburger"
// Actual: NaN

console.log("1" + "3")
// Prediction: "13"
// Actual: "13"

console.log("1" - "3")
// Prediction: "3"
// Actual: -2

console.log("johnny" + 5)
// Prediction: "johnny5"
// Actual: "johnny5"

console.log("johnny" - 5)
// Prediction: "johnn5"
// Actual: NaN

console.log(99 * "luftbaloons")
// Prediction: "99luftbaloons"
// Actual: NaN

2.
// Arrays:

// Add an element to the back of an array. 
.push()


// Remove an element from the back of an array.
.pop()


// Add an element to the front of an array.
.unshift()


// Remove an element from the front of an array.
shift() 


// Concatenates all the elements in an array into a string.
.join()


// Separates the characters of a string into an array. This one is a string method.
.split()


3.
var numbers = [2, 4, 6, 8]
numbers.pop()
numbers.push(10)
numbers.unshift(3)

console.log(numbers)

Answer [3, 2, 4, 6, 10]

4.

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
var final = moreMorse.split(" ")

console.log(final)

Answer [ 'dot', 'dash', 'pause', 'dash', 'dot' ]


var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"

//My answer bands = ["Mick", "Ringo", "Ronnie", "Ringo", "Paul", "John", "Pete"]

//Real answer [ [ 'Mick', 'Keith', 'Ronnie', 'Charlie' ],[ 'Paul', 'John', 'George', 'Ringo' ] ]


5.
a	b	a AND b
true	true	= true
true	false	= false
false	true	= false
false	false	= false
a	b	a OR b
true	true	= true
true	false	= true
false	true	= true
false	false	= false
a	b	a != b
3	3	= false
1	5	= true
2	"2"	= false
a	b	!a AND (a OR b)
true	true	= false
true	false	= false
false	true	= true
false	false	= false

6.

If a patron is older than 21, print out "Come on in!".
If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
If a patron is younger than 18, print out "You're too young to be in here!".
If a patron is older than 75, print out "Are you sure you want to be here?".

var patronAge = prompt("Whats your age?")

if (patronAge >= "21" && patronAge < "75") {
	console.log("come on in")
} else if  (patronAge >= "18" && patronAge < "21") {
	console.log("Come on in(but no drinking!") 
} else if  (patronAge < "18") {
	console.log("youre too young to be in here")
} else { (patronAge >= "75") 
	console.log("Are you sure you want to be in here?")
} 

7. 


//Bonus















