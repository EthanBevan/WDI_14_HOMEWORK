var citytype = document.querySelector("#city-type");


var option1 = document.createElement("option");
option1.value="NYC"
option1.textContent = "NYC";
//append puts it to the document. steps above just creates it. put option1 on city type id. 
citytype.appendChild(option1)
//This has only created the listing and put it on the display.

var option2 = document.createElement("option");
option2.value="SF"
option2.textContent = "SF";
citytype.appendChild(option2)


var option3 = document.createElement("option");
option3.value="LA"
option3.textContent = "LA";
citytype.appendChild(option3)


var option4 = document.createElement("option");
option4.value="SYD"
option4.textContent = "SYD";
citytype.appendChild(option4)


var option5 = document.createElement("option");
option5.value="ATX"
option5.textContent = "ATX";
citytype.appendChild(option5)




// if (option1.value="NYC") {
// 	document.body.classList.add("nyc");
// } else if (option2.value="SF") {
// 	document.body.classList.add("sf");
// } else if (option3.value="LA") {
// 	document.body.classList.add("la");
// } else if (option4.value="SYD") {
// 	document.body.classList.add("sydney");;
// } else if (option5.textContent="ATX") {
// 	document.body.classList.add("austin");
// }


var toggleCity = function(event) {


	if (document.body.classList.length >= 1) {
		document.body.className = "";


	}
}

citytype.addEventListener('change', function() {

switch(citytype.value) {
	case "NYC":
	document.body.classList.add("nyc");
	break;

	case "SF":
	document.body.classList.add("sf");
	break;

	case "LA":
	document.body.classList.add("la");
	break;

	case "SYD":
	document.body.classList.add("sydney");
	break;

	case "ATX":
	document.body.classList.add("austin");
	break;
}

})






// function myFunction() {
//     var element = document.getElementById("myDIV");
//     option.classList.add("nyc");
// }

// var option = document.getElementById("option");

// function myFunction() {
//     option.classList("nyc");
// }


// function setPicture() {
//     var img = document.getElementById("coffeedropdown");
//     var value = img.options[coffeedropdown.selectedIndex].value;
//     alert(value);
// }



















