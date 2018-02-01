console.log('Welcome!')





document.getElementById("myBtn").addEventListener("click", function(event){
	event.preventDefault();   

	var moviesearched = document.querySelector('input').value 	
	var options = {
		url: 'http://www.omdbapi.com/?apikey=2f6435d9&s='+(moviesearched),
		method: 'get'
	} 
	var $options_display = $('.options_display')
	$options_display.empty()

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
});









//Other stuff

// function myForEach(arr, fn) {

// 	for (var i = 0; i < arr.length; i++) {
// 		fn(arr[i])
// 	}

// }

// var fruits ['apple', 'lemon', 'bananas']

// myForEach(fruits, function(thing) {

// 	console.log(thing.UpperCase())
// })