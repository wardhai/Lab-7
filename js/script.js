function init(){

var text = document.getElementById("entryinput");
var button = document.getElementById("entrybutton");

button.addEventListener("click", function () {
alert("Wardha Iftikhar: " + text.value);
document.getElementById("textoutput").innerHTML = text.value
	});
	
}

window.addEventListener('load', init);