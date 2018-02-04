console.log('Welcome!')


document.getElementById("myBtn").addEventListener("click", function(event){
	event.preventDefault();   

	var giphysearched = document.querySelector('input').value 	

	var options = {
		url: 'http://api.giphy.com/v1/gifs/search?api_key=A614CLEY2TMzK5qAot6ZJFotMQcw39Zk&q='+(giphysearched),
		method: 'get'
	} 

// http://www.omdbapi.com/?apikey=2f6435d9&s='+(moviesearched)


	// have to go into data: then this then url. like artist search app. 


	var $options_display = $('.options_display')
	$options_display.empty()

	$.ajax(options).done(function(res){
		res.Search.forEach(function(giphy) {



			var newdivElem = $('<div>')

			// var actualGiph = ["data"]["type"][0]["url"]
			

			var gif = $('<img>').attr('src', giphy.url)



 	 // = JSON.parse(@apiartist_search.parsed_response)["_embedded"]["attractions"][0]["name"]

			gif.text(giphy.url)


			newdivElem.append(gif)

			

			$options_display.append(newdivElem)
			// console.log(movie.Year)


		})

	}); 
});






