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

//---------- Funcion constructora---------------------

let miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalleDelAuto: function(){
      console.log(`Auto ${this.modelo} ${this.annio}`);
  }
};

function auto(marca,modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}
undefined
auto
ƒ auto(marca,modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}
let autoNuevo = new auto("Tesla", "Modelo3", "2020");
undefined
autoNuevo
auto {marca: "Tesla", modelo: "Modelo3", annio: "2020"}
let autoNuevo2 = new auto("Tesla", "Model x", 2018);
let autoNuevo3 = new auto("Toyota", "Corolla", 2020);
undefined
autoNuevo2
auto {marca: "Tesla", modelo: "Model x", annio: 2018}

//----------------ejercicio aplicando funcion constructora y loop con cilco for

var marca = [
  "Abarth",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",	
 "Cadillac",
  "Caterham",
  "Chevrolet",
  "Citroen",
  "Dacia",
  "Ferrari",
  "Fiat",
  "Ford",
  "Honda",
  "Infiniti",
  "Isuzu",
  "Iveco",
  "Jaguar"   	 	 
]

var modelo = [
  "C-Max",
  "Fiesta",
  "Focus",
  "Mondeo",
  "Ka",
  "S-MA",
 " B-MAX",
  "Grand C-Max",
  "Tourneo Custom",
  "Kuga",
  "Galaxy",
  "Grand Tourneo Connect",
  "Tourneo Connect",
  "EcoSport",
  "Tourneo Courier",
  "Mustang",
  "Transit Connect",
  "Edge",
  "Ka+"
]

var anio = [
  "1988",
  "1989",
  "1978",
  "1989",
  "1928",
  "1989",
  "1968",
  "1989",
  "1888",
  "1989",
  "1288",
  "1989",
  "1938",
  "1989",
  "1988",
  "1999",
  "1983",
  "1989",
  "1918"
]




function auto(marca, modelo, anio){
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio
}

for(var i = 0; marca.length > i && modelo.length > i && anio.length > i; i++){
  var nuevoAuto = new auto(marca[i], modelo[i], anio[i]);
  console.log(nuevoAuto)
}
