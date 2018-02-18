var argv = process.argv

console.log(process.argv)



// selects out number
var number = process.argv[2]


for(var sum = 0, i = 1;
    i <= number;
    !(i % 3 && i % 5) && (sum += i), i++
);
// Log the result
console.log("The sum of these multiples is " + sum);

