for(let i = 0; i < estudiantes.leght; i++); // Sintaxis ciclo for, contiene tres elementos: el primero es la declaracion de una variable (casi siempre llamada i) y como se inicia, luego la condicion que debe cumplir el dato, finalmente el operador para incrementar el valor o contador

let estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]; //ejemplo

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(let i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}
//---------------------------------------------------
for (let estudiante of estudiantes){     
  saludarEstudiantes(estudiante); 
}                                    //esta es otra manera de usar el metodo for loops, la variable "estudiante" (siempre en singular) se convierte en el index de cada uno de los elementos del array "estudiantes" (siempre en plural), se suma automaticamente y llamada cada elemento del arreglo.
//---------------------------------------------------------
while(estudiantes.length > 0){ 
  console.log(estudiantes)
  let estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}                                        //ejemplo ciclo while, la sintaxis refiere a que mientras la codicion encerrda en parentesis luego de la palabra while el ciclo realizara las tareas asignadas dentro de las llaves {}       
