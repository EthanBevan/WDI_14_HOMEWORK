var express = require('express')
var app = express()
// var showPlaces = require('./placesController')
var PORT = 8080;


app.set('views', './views')
app.set('view engine', 'ejs')



// app.get('/', function(req, res){

  app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html')
	// this is where you make javascript formula then call it where Date() is on other page
	



	// res.render('index')
})

// //Takes you to about page.
// app.get('/home', function(req, res) {
// 	//render is for templates
// 	res.render('home')
// })

app.listen(PORT, function(){
	console.log(`listening on port ${PORT}`)
})
