//your code here
let button = document.getElementById("addTodoBtn");
let ol = document.getElementById("todoList");

function addlist(){
	let input = document.getElementById("newTodoInput").value;
	let text = document.createTextNode(input);
	let li = document.createElement("li");
	li.appendChild(text);
	if(input===""){
		alert("Please do not Input Empty String!!!!")
	}
	else{
		ol.appendChild(li);
	}
	
	document.getElementById("newTodoInput").value="";
}
