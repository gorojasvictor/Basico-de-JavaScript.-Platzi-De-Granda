let edad = 18;

if(edad === 18){
  console.log("Puedes votar");
} else if  (edad > 18) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("Aun no puedes votar");
}


condition ? true : false; //Sintaxis operador ternario

let numero = 1;
let resultado = numero === 1 ? "Si soy el numero uno" : "No soy el numero uno";


var jugador;
var computador;

if (jugador == "tijeras"  && computador == "papel") 
{
    console.log("Ganaste");
}
else if (jugador == "Piedra"  && computador == "tijeras") 
{
    console.log("Ganaste");
}
else if (jugador == "papel"  && computador == "piedra") 
{
    console.log("Ganaste");
}
else if (jugador == computador ) 
{
    console.log("empate");
}
else {
    console.log("Perdiste")
}

var jugador = 'papel';
var pc = 'papel';
var resultado;

function ganador (){

	if(jugador === pc){

		return resultado = 'empate';
	}

	else if((jugador == 'piedra' && pc == 'papel') || (jugador == 'papel' && pc == 'tijera') || (jugador == 'tijera' && pc == 'piedra')){

		return resultado = 'Gana PC';
}

	else if((jugador == 'piedra' && pc == 'tijera') || (jugador == 'papel' && pc == 'piedra') || (jugador == 'tijera' && pc == 'papel')){

		return resultado = 'Gana Jugador';
    }

	else{

		return resultado = 'Ingrese valores correctos';
}
}

console.log(ganador());
