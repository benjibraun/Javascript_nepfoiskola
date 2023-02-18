var x = 0;
var error = "no error yet";
const pi = 3.14;


function update()
{
	x = Number(document.getElementById("in").value); //
	document.getElementById("out").innerHTML = x;
}
function add() 
{	
	x = x + Number(document.getElementById("in").value);
	document.getElementById("out").innerHTML = "=" + x;
	console.log(x);

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
	var input = Number(document.getElementById("in").value);
	if (input != 0)
	{
		x = x / input;
		document.getElementById("out").innerHTML = "=" + x;
		console.log(x);
	}
	else{
		error = "Computer says no!"
		document.getElementById("out").innerHTML = error;
		console.log(error);	
	}
}