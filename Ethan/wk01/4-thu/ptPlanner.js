//Train lines
var lines = {
Alamein: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
GlenWaverly: ['Flag Staff', 'Melbourne Central', 'Paliament', 'Richmond','Kooyong'],
Sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'],
}


//USER INPUT

// //Ask user what line
// var getLineO = prompt('Enter Origin Line? Options: \n \n Alamein \n (Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie), \n \n GlenWaverly \n (Flag Staff, Melbourne Central, Paliament, Richmond, Kooyong) \n \n Sandringham \n (Southern Cross, Richmond, South Yarra, Prahran, Windsor')
// var getLineD = prompt('Enter Destination Line? Options: \n \n Alamein = (Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie), \n \n GlenWaverly = (Flag Staff, Melbourne Central, Paliament, Richmond, Kooyong) \n \n or Sandringham = (Southern Cross, Richmond, South Yarra, Prahran, Windsor')

//ask User input origin and destination
var origin = prompt('Enter Origin \n \n Alamein \n (Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie), \n \n GlenWaverly \n (Flag Staff, Melbourne Central, Paliament, Richmond, Kooyong) \n \n Sandringham \n (Southern Cross, Richmond, South Yarra, Prahran, Windsor')
var destination = prompt('Enter Destination \n \n Alamein \n (Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie), \n \n GlenWaverly \n (Flag Staff, Melbourne Central, Paliament, Richmond, Kooyong) \n \n Sandringham \n (Southern Cross, Richmond, South Yarra, Prahran, Windsor')


// Working Space


var begginingTrain = '';
var endTrain = '';

//Find which lines origin and destination are on
// ORIGIN
if (origin !== destination) {

	for (var trainLineFind in lines) {
	if (lines[trainLineFind].includes(origin)) {
		begginingTrain = trainLineFind;
	if (destination === 'Richmond') {
	endTrain = trainLineFind
	break;
	}
}

//DESTINATION
	if (lines[trainLineFind].includes(destination)) {
		endTrain = trainLineFind
	 if (origin === 'Richmond') {
	begginingTrain = trainLineFind
	break;	
}
}


}

// GET start and end index numbers of the stops.

var startNumber = lines[begginingTrain].indexOf(origin)
var endNumber = lines[endTrain].indexOf(destination)
var journeyTrain = [];

// ORIGIN and dest on same line

if (begginingTrain === endTrain) {

	if (startNumber < endNumber) {
		journeyTrain.push(lines[begginingTrain].slice(startNumber, endNumber +1))
	} else {
		journeyTrain.push(lines[begginingTrain].slice(endNumber, startNumber +1).reverse())
	}
} else {
	//Richmonds stops!
	begginingRichmond = lines[begginingTrain].indexOf('Richmond')
	endRichmond = lines[endTrain].indexOf('Richmond')

// For switching around slice the array and make a new one with richmond switch

if ((startNumber < begginingRichmond) && (endRichmond < endNumber)) {
	//Normal direction
	var journeyOne = lines[begginingTrain].slice(startNumber, begginingRichmond)
	var journeyTwo = lines[endTrain].slice(endRichmond, endNumber +	1)
} else if ((startNumber < begginingRichmond) && (endNumber < endRichmond)) {
	//Normal direction then on switch goes right to left backwards
	var journeyOne = lines[begginingTrain].slice(startNumber, begginingRichmond +1)
	var journeyTwo = lines[endTrain].slice(endNumber, endRichmond)
} else if ((startNumber > begginingRichmond) && (endNumber < endRichmond)) {
	//Backwards direction then on switch goes right to left backwards again
	var journeyOne = lines[begginingTrain].slice(begginingRichmond, startNumber +1)
	var journeyTwo = lines[endTrain].slice(endNumber, endRichmond)
} else if ((startNumber > begginingRichmond) && (endNumber > endRichmond)) {
	//Backwards direction then on switch goes left to right normal again
	var journeyOne = lines[begginingTrain].slice(begginingRichmond + 1, startNumber + 1)
	var journeyTwo = lines[endTrain].slice(endRichmond, endNumber + 1)
}


	if (startNumber > begginingRichmond) { journeyOne.reverse() }
	if (endNumber < endRichmond) { journeyTwo.reverse() }

		journeyTrain.push(journeyOne);
		journeyTrain.push(journeyTwo);
		}

// Single array
journeyTrain = journeyTrain.reduce((prev,curr) => prev.concat(curr));

function creatingJourney () {
	document.write('<p id="jstext">' + journeyTrain.join(' ---> ') + '</p>')
}






// Working Space




// // TELLS THEM THEIR ORIGIN AND DESTINATION. Working PERFECT.

// Origin and Destination output. 
var outputToUser = function() {
	document.write('<p id="jstext">' + "Origin: " + origin + '</p>'); 
	document.write('<p id="jstext">' + "Destination: " + destination + '</p>');
}



// //ALL TO DO WITH NUMBER OF STOPS. `~~~~~~ NEEDS A REVERSE NUMBERS ~~~~~~~~.  

// // calculating number of stops
// function numberOfStopsLine () {
//  if (originIndexA >= 0 && destinationIndexA >= 0){
// 	var numberOfStopsA = destinationIndexA - originIndexA;
// 	document.write('<p id="jstext">' + numberOfStopsA + ' Stops' + '</p>')
// 	 } else if (originIndexG >= 0 && destinationIndexG >= 0){
// 	var numberOfStopsG = destinationIndexG - originIndexG;
// 	document.write('<p id="jstext">' + numberOfStopsG + ' Stops' + '</p>')
// 	 } else if (originIndexS >= 0 && destinationIndexS >= 0){
// 	var numberOfStopsS = destinationIndexS - originIndexS;
// 	document.write('<p id="jstext">' + numberOfStopsS + ' Stops' + '</p>')
// 	 }
// 	}

function numberOfStops () {
if (begginingTrain === endTrain) {
			var numberOfStopsOnLine = Math.abs(endNumber - startNumber);
			document.write('<p id="jstext">' + numberOfStopsOnLine + ' Stops' + '</p>')
		} else {
			var journeyOnestops = Math.abs(startNumber - begginingRichmond);
			var journeyTwostops = Math.abs(endNumber - endRichmond);
			var numberOfStopsOnLine = journeyOnestops + journeyTwostops;
			document.write('<p id="jstext">' + numberOfStopsOnLine + ' Stops' + '</p>')
		}
	}


outputToUser(); 
numberOfStops();
creatingJourney();


}



// // creating journey
// function creatingJourney () {
//  if (journeyTrain === true) {
// 	document.write('<p id="jstext">' + journeyTrain.join(' ---> ') + '</p>')

// } else if (originIndexG < destinationIndexG ) {
// 	document.write('<p id="jstext">' + journeyG.join(' ---> ') + '</p>')
// } else if (originIndexS < destinationIndexS) {
// 	document.write('<p id="jstext">' + journeyS.join(' ---> ') + '</p>')
// // } else if (originIndexA < destinationIndexG) {
// // 	document.write('<p id="jstextNine">' + journeyAG.join(' ---> ') + '</p>') 
// }
// }


// outputToUser(); 
// numberOfStopsLine();
// creatingJourney();







// // ALL TO DO WITH TRAIN LINES. FINDING THE LINE. ~~ NEED TO BE ABLE TO SWITCH ~~~.

// // calculating indexes 
// var originIndexA = lines.Alamein.indexOf(origin)
// var originIndexG = lines.GlenWaverly.indexOf(origin)
// var originIndexS = lines.Sandringham.indexOf(origin)

// // calculate destination
// var destinationIndexA = lines.Alamein.indexOf(destination)
// var destinationIndexG = lines.GlenWaverly.indexOf(destination)
// var destinationIndexS = lines.Sandringham.indexOf(destination)


// //FINDING THE LINE

// function findLineO(line) {
// 	if (getLineO === Alamein) {
// 		return originIndexA
// 	} else if (getLineO === GlenWaverly) {
// 		return originIndexG
// 	} else if (getLineO = Sandringham) {
// 		return originIndexS
// 	}
// }


// function findLineD(line) {


// 	if (getLineD === Alamein) {
// 		return destinationIndexA
// 	} else if (getLineD === GlenWaverly) {
// 		return destinationIndexG
// 	} else if (getLineD = Sandringham) {
// 		return destinationIndexS

// 	}
// }

// //Finding line for switch
// //Alamein to glenwaverly

// for (i = lines.Alamein[0]; lines.Alamein[0] < lines.Alamein[1]; i++) {
// 	var originIndexASwitch = i 
// }


// for (i = lines.GlenWaverly[3]; lines.GlenWaverly[3] < lines.GlenWaverly[4]; i++) {
// 	var originIndexGSwitchTo = i 
// }

// //Alamein to sandringham

// for (i = lines.Sandringham[1]; lines.Sandringham[1] < lines.Sandringham[4]; i++) {
// 	var originIndexGSwitchTo = i 
// }



// if (getLineO === Alamein && getLineD ==== GlenWaverly) {
// 	return originIndexASwitch
// } else if (getLineO === Alamein && getLineD ==== GlenWaverly) {
// 	return originIndexASwitch
// } 








// // WRITING OUT THE JOURNEY. Puts them in a new array.

// var journeyA = (lines.Alamein.slice(originIndexA, destinationIndexA+1))
// var journeyG = (lines.GlenWaverly.slice(originIndexG, destinationIndexG+1))
// var journeyS = (lines.Sandringham.slice(originIndexS, destinationIndexS+1))
// //Cross Journies
// // var journeyAG = (lines.Alamein.slice(originIndexASwitch, originIndexGSwitchTo+1))




// function journey () {
// if (getLineO === Alamein && getLineD === Alamein) {
// 	return journeyA
// } else if (getLineO === GlenWaverly && getLineD === GlenWaverly) {
// 	return journeyG
// } else if (getLineO === Sandringham && getLineD === Sandringham) {
// 	return journeyS

// 	// Cross journies 
// } else if (getLineO === Alamein && getLineD === GlenWaverly) {
// // 	return journeyAG
// // }
// }
// }



// // creating journey
// function creatingJourney () {
// if (originIndexA < destinationIndexA) {
// 	document.write('<p id="jstext">' + journeyA.join(' ---> ') + '</p>')
// } else if (originIndexG < destinationIndexG ) {
// 	document.write('<p id="jstext">' + journeyG.join(' ---> ') + '</p>')
// } else if (originIndexS < destinationIndexS) {
// 	document.write('<p id="jstext">' + journeyS.join(' ---> ') + '</p>')
// // } else if (originIndexA < destinationIndexG) {
// // 	document.write('<p id="jstextNine">' + journeyAG.join(' ---> ') + '</p>') 
// }
// }


// CALLS ORIGIN AND DESINATION, 
//THEN STOPS, 
//THEN CREATES JOURNEY


























//Extra stuff
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

