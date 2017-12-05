var Alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley, Hawthorn', 'Glenferrie']
var GlenWaverly = ['Flag Staff', 'Melbourne Central', 'Paliament', 'Richmond','Kooyong']
var Sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']

var origin = 'Flag Staff'
var destination = 'Paliament'


var trip1 = (origin + ' --> Paliament --> ' + destination)
var trip2 = (origin + ' --> Melbourne Central --> ' + destination)

if (origin === 'Melbourne Central' && destination ==='Richmond') {
 	console.log(trip1)
} else {
	console.log(trip2)
}


/*
all the lines

if origin = flinders 
destination = east richmond

 trip 1 = flinders richmond east richmond 

 print trip1

*/