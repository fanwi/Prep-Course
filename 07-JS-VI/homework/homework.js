// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  /*var mayus = nombre.charAt(0).toUpperCase()
  var resto = []
 for(i = 1; i<nombre.length; i++){
    resto.push(nombre[i])
  };
  return mayus+resto.join('')*/
  return nombre.charAt(0).toUpperCase() + nombre.slice(1)
  // [M] + [ario]
  //slice(principio, final de la frase)
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb()
 
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
 cb(n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  /*var suma = 0
  for (let i = 0; i<numeros.length; i++){
    suma +=numeros[i]
  }
  cb(suma)*/
  //el reduce reduce a la minima expresion un array
  //acumuladir, donde se acumulan todos, y elemento
  //o sea el que recorre elemento por elemento para ir 
  //acumulando
  //curr = current number o elemento
  var sumaTotal= numeros.reduce(function(acc, curr){
    return acc+curr;
  }, 0)//el cero es el numero con el que inicia el acc
      //empieza en 0, y le va sumando los demas
      //podria empezar en 10 por ejemplo.
  cb(sumaTotal);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for(let i = 0; i<array.length; i++){
    cb(array[i])
  
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  let nuevo = array.map(function(elemento){
    return cb(elemento)
  })
  return nuevo
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  let nuevoarray = []
  array.forEach(function(elemento){
    if(elemento.charAt(0) === 'a'){
      nuevoarray.push(elemento)
    }
  })
  return nuevoarray
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
