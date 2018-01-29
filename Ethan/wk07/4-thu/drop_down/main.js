var citytype = document.getElementById("city-type");
var option1 = document.createElement("option");
option1.value="NYC"
option1.textContent = "nyc";
select.appendChild(option1)

var citytype = document.getElementById("city-type");
var option2 = document.createElement("option");
option2.value="SF"
option2.textContent = "sf";
select.appendChild(option2)

var citytype = document.getElementById("city-type");
var option3 = document.createElement("option");
option3.value="LA"
option3.textContent = "la";
select.appendChild(option3)

var citytype = document.getElementById("city-type");
var option4 = document.createElement("option");
option4.value="SYD"
option4.textContent = "sydney";
select.appendChild(option4)

var citytype = document.getElementById("city-type");
var option5 = document.createElement("option");
option5.value="ATX"
option5.textContent = "austin";
select.appendChild(option5)


// citytype.add(option4);

var toggleCity = function(event) {


if (document.body.classList.length >= 1) {
	document.body.className = "";
}
}

switch(select.value) {
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



















