



/*
const myElement = document.getElementById("demo");
myElement.style.color = "red";
*/
var x = 0;
const pi = 3.14;

var barna;

function update()
{
	x = Number(document.getElementById("in").value);
	document.getElementById("out").innerHTML = x;
}
function add() 
{
	
	if (x == document.getElementById("in").value){
		
	x = x + Number(document.getElementById("in").value);
	document.getElementById("out").innerHTML = "=" + x;
	console.log(x);
	}
}
function subtract() 
{
	x = x - Number(document.getElementById("in").value);
	document.getElementById("out").innerHTML = "=" + x;
	console.log(x);
}
function multiply() 
{
	x = x * Number(document.getElementById("in").value);
	document.getElementById("out").innerHTML = "=" + x;
	console.log(x);
}
function divide() 
{
	x = x / Number(document.getElementById("in").value);
	document.getElementById("out").innerHTML = "=" + x;
	console.log(x);	
}