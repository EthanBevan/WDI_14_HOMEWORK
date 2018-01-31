console.log('Welcome!')

//Display list of movies using ajax.

//using s=jaws to request a list of movies.
// use javascript dom creation to show it in the page wrapped in paragraphs for each movie

var moviesearched = document.querySelector('input').value 
debugger
var options = {
	url: 'http://www.omdbapi.com/?apikey=2f6435d9&s='+(moviesearched),
	method: 'get'
} 

//Search not working above.

// 'http://omdbapi.com/?s='+(moviesearched)+'&apikey=2f6435d9'

//Then put in url input.value

// 'http://omdbapi.com/?t='+params[:movie]+'&apikey=2f6435d9'

var $options_display = $('.options_display')

$.ajax(options).done(function(res){

res.Search.forEach(function(movie) {
var newdivElem = $('<div>')
var newH2Elem = $('<h2>')
var newH2ElemPoster = $('<img>').attr('src', movie.Poster)
newH2Elem.text(movie.Title)
newH2ElemPoster.text(movie.Poster)
newdivElem.append(newH2Elem)
newdivElem.append(newH2ElemPoster)

$options_display.append(newdivElem)
$options_display.append(newH2ElemPoster)
// console.log(movie.Year)

})

}); 


//create it in javascript using dom creation

// ajax is a jquery thing. get url information.






// function myForEach(arr, fn) {

// 	for (var i = 0; i < arr.length; i++) {
// 		fn(arr[i])
// 	}

// }

// var fruits ['apple', 'lemon', 'bananas']

// myForEach(fruits, function(thing) {

// 	console.log(thing.UpperCase())
// })