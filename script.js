var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liDone = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var del = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(del);
	del.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
	e.target.classList.toggle("done");
}
})

ul.addEventListener("click", function(e){
	if(e.target.tagName === "BUTTON"){
	e.target.parentElement.remove();
}
})