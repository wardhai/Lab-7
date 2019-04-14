function init(){

var text = document.getElementById("entryinput");
var button = document.getElementById("entrybutton");

button.addEventListener("click", function () {
alert("Wardha Iftikhar: " + msg.value);
document.getElementById("textoutput").innerHTML = msg.value
	});
	
}

window.addEventListener('load', init);