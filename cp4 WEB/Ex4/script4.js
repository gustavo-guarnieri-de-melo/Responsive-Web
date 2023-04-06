let count = 0;

function incrementCounter() {
	count++;
	document.getElementById("contador").innerHTML = count + " cliques";
}

document.getElementById("botao").addEventListener("click", incrementCounter);

//Utilizando Arrow function

//let count = 0;

//const incrementCounter = () => {
	count++;
	document.getElementById("contador").innerHTML = count + " cliques";
//}

//document.getElementById("botao").addEventListener("click", incrementCounter);
