//Metodos push, agregar uno o mas elementos de un array

let numArray = [1,2,3,4,5];

function newNum(){
    numArray.push(6,7)
    console.log(numArray)
}

let txtArray = ["Ana", "Juan", "Diego", "Lautaro"];

function addCharacters(){
    txtArray.push("Chris", "Maria")
    console.log(txtArray)
}                             //Anteriormente podemos observar dos ejemplos del uso del metodo push, que sirve para agregar dos elementos al final de la lista de nuestro array, el primer ejemplo con numeros, el segundo con strings 

let array = [1,2,3,4,5]
    console.log(array)
let shiftArray = array.shift()
    console.log(array)      // Este es el metodo push, el cual nos eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.


let array = [1,2,3,4,5]
    console.log(array)
let shiftArray = array.pop()
    console.log(array)      //El método .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4.