var inputVal = document.getElementById("country");
var button = document.getElementsByClassName("submitButton")[0];
var outputVal = document.getElementsByClassName("output")[0];

const Italy = ["Risotto", "Pizza", "Pasta", "Gnocchi", "Pesto alla Genovese"];
const China = ["Peking Duck", "Kung Pao Chicken", "Sweet and Sour Pork", "Hot Pot", "Dim Sum"];
const France = ["Steak Frites", "Chicken Confit", "French Onion Soup", "Bouillabaisse", "Croque Monsieur"];
const Spain = ["Croquetas", "Rabo de Toro", "Pisto", "Paella", "Carrillada"];
const Japan = ["Ginger Pork", "Champon", "Edamame", "Ramen", "Sushi"];
const UnitedStates = ["Cheeseburger", "Hot Chicken", "Biscuits and Gravy", "BBQ", "Jambalaya"];
const countries = [Italy, China, France, Spain, Japan, UnitedStates];

button.addEventListener("click", function generate() {
	var random = Math.floor(Math.random() * 5);
	if(inputVal.value == "Italy") {
		outputVal.textContent = "You should eat " + Italy[random];
	}
	else if(inputVal.value == "China") {
		outputVal.textContent = "You should eat " + China[random];
	}
	else if(inputVal.value == "France") {
		outputVal.textContent = "You should eat " + France[random];
	}
	else if(inputVal.value == "Spain") {
		outputVal.textContent = "You should eat " + Spain[random];
	}
	else if(inputVal.value == "Japan") {
		outputVal.textContent = "You should eat " + Japan[random];
	}
	else if(inputVal.value == "United States") {
		outputVal.textContent = "You should eat " + UnitedStates[random];
	}
	else if(inputVal.value == "random") {
		var randomC = Math.floor(Math.random() * countries.length);
		outputVal.textContent = "You should eat " + countries[randomC][random];
	}
	else {
		outputVal.textContent = "Not in the countries list";
	}
	restyle();
});

function restyle() {
	var randColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padEnd(6,0);
	var randFontSize = Math.floor(Math.random() * 20 + 15) + "px";
	var randBackColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padEnd(6,0);

	outputVal.style.color = randColor;
	outputVal.style.fontSize = randFontSize;
	outputVal.style.backgroundColor = randBackColor;
}