//underscore and node.
//api key
// d900378763de1e4dcfb24f40dea16fbc

var _ = require('underscore')
var request = require('request')

var url = "http://api.openweathermap.org/data/2.5/weather?q=melbourne&apikey=d900378763de1e4dcfb24f40dea16fbc"

request(url, function (error, response, body) {

	var kelvinMelbourneTemp = (JSON.parse(body).main.temp)

	var degreesMelbourneTemp = (kelvinMelbourneTemp-273.15)

	var roundedDegreesMelbourneTemp = Math.round(degreesMelbourneTemp)
	console.log("Melbourne Temperature is " + roundedDegreesMelbourneTemp + " degrees")
});

