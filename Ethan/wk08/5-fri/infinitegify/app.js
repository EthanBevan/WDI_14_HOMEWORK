var gifCount = 0;
var giphysearched = '';



$('.searchButton').click(function() {
	
	giphysearched = $('input').val();
	
	var options = {
		url: 'http://api.giphy.com/v1/gifs/search?api_key=A614CLEY2TMzK5qAot6ZJFotMQcw39Zk&q='+ giphysearched,
		method: 'get'
	} 

 $('.options_display').children().remove();
 gifTime(options);

})

$(window).on('scroll', function(){
  if ($(window).scrollTop() > $(document).height() - 100 - $(window).height()) {
    var options = {
      url: "http://api.giphy.com/v1/gifs/search?api_key=RpFanF963c1hiGd4b0MJ4E6RQ8OB62TL&limit=10&offset=" + gifCount +"&q=" + giphysearched,
      method: 'get'
    }
    gifTime(options);
  }
});



// http://www.omdbapi.com/?apikey=2f6435d9&s='+(moviesearched)
	// have to go into data: then this then url. like artist search app. 

function gifTime(options){
  gifCount = gifCount + 10;
		$.ajax(options).done(function(response){
			response.data.forEach(function(giphy) {

			
				var gif = $('<img>').attr('src', giphy.images.fixed_height.url);
				
				var newDivElem = $('<div>');

				newDivElem.append(gif);

				$('.options_display').append(newDivElem);

			});

		}); 
	};








