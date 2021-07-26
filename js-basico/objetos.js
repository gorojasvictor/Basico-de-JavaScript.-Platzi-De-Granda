let nombreObjeto = {}; //sintaxis, se declara como variable(let), se le coloca un nombre (nombreObjeto), signo igual, se le asigna propiedades (valores relacionados directamente con palabras clave) que estaran en el objeto y se representa con los simbolos {} a diferencia de los arrays, identificados con los simbolos [].

let miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020
};

miAuto.marca
"Toyota"
miAuto.annio
2020              //para acceder a los elementos dentro del objeto se coloca el nombre del objeto seguido de un punto y se coloca el nombre de la palabra clave que dara como resultado el valor directamente relacionado a esta. 

let miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalleDelAuto: function(){
      console.log(`Auto ${this.modelo} ${this.annio}`);
  }
};

//detalleDelAuto en este ejemplo de como tomar una propiedad del objeto creandole una function que  realizar acciones dentro del mismo objeto, a esto se le llama "metodos de objeto".

//para acceder a la propierdad "detallesDelAuto" dentro del objeto "miAuto" se coloca el nombre del objeto punto el nombre del medodo o funcion en el ejemplo colocandole los parentesis como regularmente se mandan a llamar las funciones.

//this es una variable que hace referencia al objeto, en el ejemplo this hace referencia al objeto "miAuto" es decir miAuto.modelo. En otros contextos el mismo this puedar dar como resultados otros elementos.

miAuto.detalleDelAuto();  //lamado de la funcion haciendo relacion al objeto
 //Auto Corolla 2020 ---> reultado en consola