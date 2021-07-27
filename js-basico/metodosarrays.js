//Metodo filter. Metodo map. Metodo find. Metodo forEach. Quinta Metodo some.

let articulos = [                       
  { nombre: "Bici", costo: 3000},
  { nombre: "Tv", costo: 2500},
  { nombre: "Libro", costo: 320},
  { nombre: "Celular", costo: 10000},
  { nombre: "Laptop", costo: 20000},
  { nombre: "Teclado", costo: 500},
  { nombre: "Audifonos", costo: 1700},
];                                      //EJEMPLO. variable "articulos" cotiene un array que contiene a su vez objetos con parametros y palabra clave

let articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 500
});                                      //metodo filter aplicado en el ejemplo, el mismo filtra de acuerdo la funcion que contine una condicion para retornar a consola creando un array nuevo con los resultados "articulosFiltrados" en el caso de este ejemplo. Crea un nuevo array con los elementos del array que se pasó como parámetro y que cumplan con la condición definida.

let nombreArticulos = articulos.map(function(articulo){
  return articulo.nombre
});                                      //metodo map aplicado al ejemplo, crea un nuevo array con el parametro agregado en el return de la funcion asociada, donde se indica como se llama el elmento a enlistar en el nuevo array mapeando todo su contenido. Crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos.

let encuentraArticulo = articulos.find(function(articulo){
  return articulo.nombre === "Laptop"
});                                     //metodo find aplicado al ejemplo, crea un nuevo array con los elementos encontrados de acuerdo a una caracteristica. Retorna el primer elemento de un array que cumple con una condicion definida en un nuevo array.

articulos.forEach(function(articulo){
  console.log(articulo.nombre)
});                                   //metodo forEach aplicado al ejemplo, en este caso el metodo NO genera un array con los resultados, solo los muestra en pantalla. Ejecuta la función indicada una vez por cada elemento del array.

let articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
});                                  //metodo some aplicado al ejemplo, este solo valida con true o false la condicion agregada en la funcion, con el metodo filter y la misma condicion podemos mostrar en un nuevo array esos elementos de nuestro objeto. Retorna "true" o "false" si hay elementos en un array que cumplan con la condicion indicada. 