//Train lines
var lines = {
Alamein: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
GlenWaverly: ['Flag Staff', 'Melbourne Central', 'Paliament', 'Richmond','Kooyong'],
Sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'],
}

//Ask user what line
var getLineO = prompt('Enter Origin Line? Options: Alamein, GlenWaverly or Sandringham')
var getLineD = prompt('Enter Destination Line? Options: Alamein, GlenWaverly or Sandringham')

//ask User input origin and destination
var origin = prompt('Enter Origin')
var destination = prompt('Enter Destination')



// calculating indexes 
var originIndexA = lines.Alamein.indexOf(origin)
var originIndexG = lines.GlenWaverly.indexOf(origin)
var originIndexS = lines.Sandringham.indexOf(origin)

// calculate destination
var destinationIndexA = lines.Alamein.indexOf(destination)
var destinationIndexG = lines.GlenWaverly.indexOf(destination)
var destinationIndexS = lines.Sandringham.indexOf(destination)

function findLineO(line) {


	if (getLineO === Alamein) {
		return originIndexA
	} else if (getLineO === GlenWaverly) {
		return originIndexG
	} else if (getLineO = Sandringham) {
		return originIndexS

	}
}


function findLineD(line) {


	if (getLineD === Alamein) {
		return destinationIndexA
	} else if (getLineD === GlenWaverly) {
		return destinationIndexG
	} else if (getLineD = Sandringham) {
		return destinationIndexS

	}
}


// // calculating number of stops
// if (originIndex >= 0 && destinationIndex >= 0){
// 	var numberOfStops = destinationIndex - originIndex;
// }

var journeyA = (lines.Alamein.slice(originIndexA, destinationIndexA+1))
var journeyG = (lines.GlenWaverly.slice(originIndexG, destinationIndexG+1))
var journeyS = (lines.Sandringham.slice(originIndexS, destinationIndexS+1))


function journey () {
if (getLineO === Alamein && getLineD === Alamein) {
	return 'sdsdf'
} else if (getLineO === GlenWaverly && getLineD === GlenWaverly) {
	return journeyS
} else if (getLineO === Sandringham && getLineD === Sandringham) {
	return journeyG
}
}


// reverse goes here.

// creating journey
if (originIndexA < destinationIndexA) {
	console.log(journeyA.join(' ---> '))
} else if (originIndexG < destinationIndexG ) {
	console.log(journeyG.join(' ---> '))
} else if (originIndexS < destinationIndexS) {
	console.log(journeyS.join(' ---> '))
}


	

var outputToUser = function() {
	console.log("origin: " + origin);
	console.log("destination: " + destination);
}


//console.log(numberOfStops + ' Stops')


outputToUser(); 






/*


//...Calculate destination from richmond if they switch over...
Extra

if (origin = 'Flag Staff' || origin = 'Melbourne Central' || origin = 'Paliament' || origin = 'Richmond' || origin = 'Kooyong') {
	var originIndex = lines.GlenWaverly.indexOf(origin)
}


if (origin = 'Southern Cross' || origin = 'Richmond' || origin = 'South Yarra' || origin = 'Prahran' || origin = 'Windsor') {
	var originIndex = lines.Sandringham.indexOf(origin)
}

//Destination line
if (destination = 'Flinders Street' || destination = 'Richmond' || destination = 'East Richmond' || destination = 'Burnley' || destination = 'Hawthorn' || destination = 'Glenferrie') {
	var destinationIndex = lines.Alamein.indexOf(origin)
}


if (destination = 'Flag Staff' || destination = 'Melbourne Central' || destination = 'Paliament' || destination = 'Richmond' || destination = 'Kooyong') {
	var destinationIndex = lines.GlenWaverly.indexOf(origin)
}


if (destination = 'Southern Cross' || destination = 'Richmond' || destination = 'South Yarra' || destination = 'Prahran' || destination = 'Windsor') {
	var destinationIndex = lines.Sandringham.indexOf(origin)
}

function checkLineO () {
	for (i = 0; 0 < 6; i++)
	if (origin === lines.Alamein[i]) {
		originIndex = lines.Alamein.indexOf(origin)
	} else if (origin === lines.GlenWaverly[i]) {
		originIndex = lines.GlenWaverly.indexOf(origin) 
	} else if (origin === lines.Sandringham[i]) {
		originIndex = lines.Sandringham.indexOf(origin)
}
}

function checkLineD () {
	if (destination === lines.Alamein[i]) {
		destination = lines.Alamein.indexOf(destination)
	} else if (destination === lines.GlenWaverly[i]) {
		destination = lines.GlenWaverly.indexOf(destination) 
	} else if (destination === lines.Sandringham[i]) {
		destination = lines.Sandringham.indexOf(destination)
}
}
*/


// for (var i = originIndex; i <= destinationIndex; i++) {
// 	if (i === destinationIndex) {
// 		journey += stations[i]
// 	} else (journey += stations[i] += ' ---> ');
// }


// define stations + lines
//take users input
// find the trainline of origin + position of line.
// "    " for destination "       "
//loop through origin -> Destination, print out station names. 
//Difference between origin/destination indexes. 

// richmond intersection is important if youre switching lines. 



// reverse yep

// switch over lines 
// find the line of the origin and the line of destination,
//then find index of up to each line then join them.

