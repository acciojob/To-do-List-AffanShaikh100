//your code here
let input = document.getElementById("newTodoInput");
let button = document.getElementById("addTodoBtn");
let ol = document.getElementById("todoList");

function addlist(){
	let text = document.createTextNode(input.value);
	let li = document.createElement("li");
	li.appendChild("text");
	ol.appendChild("li");
	input.value="";
}
