// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 var arreglo = [] //declaramos la variable del array a devolver
 for (clave in objeto){ //para cada clave en objeto
  arreglo.push([clave, objeto[clave]]) //pusheamos de a 2, primero la el nombre de la clave, y luego el valor que devuelve ej ('D', objeto.D (1))
 }
 return arreglo
}
  


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí //una key cuyo value sea la cantidad de apariciones> d: 5
  var total= {}
  for (let i = 0; i < string.length; i++) {
    total[string[i]] = (total[string[i]] || 0) + 1 
    // ejemplo> total["a"] = 0 + 1 (si es falso, o sea si no tenia valor asignado)
    //          total["a"] = total["a"] + 1 (o sea el valor que ya tenía, mas 1) si da verdadero, o sea que alberga un valor
    //                       que no sea 0, 1 por ejemplo, entonces si a: 1, ahora a:2
    //                       es basicamente un a = a+1 o a+=1, pero con el ||
    }
    return total
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = ''
  var minus = ''
  for (var i = 0; i<s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      mayus += s[i]
    }else{
      minus += s[i]
    }
  }
  return mayus+minus
}
  

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  // separamos el string por cada espacio que tiene (lo separamos en palabras) y lo recorremos con .map
  var espejo = str.split(' ').map(function(elemento){

  // a cada palabra, o elemento, la separamos en letras, las ponemos al revés y las volvemos a unir
  // asi que tendriamos un array de palabras ordenadas, cuyas letras estan invertidas
    return elemento.split('').reverse().join('') 
  
  // el nuevo array de palabras con letrsa invertidas estas separado como elementos, asi que los hacemos
  // un solo string, y usamos de separador a un espacio, el cual irá entre elemento(palabra)
  }).join(' ') 
  return espejo
  
  

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  // si numero es === a numero hecho string>spliteado>puesto en reversa>hecho un solo string. todo eso pasado a entero, es capicua
  if(numero === parseInt(numero.toString().split('').reverse().join(''))){
    return 'Es capicua'
  }else{
    return 'No es capicua'
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenamodificada = ''
  for (let i = 0; i < cadena.length; i++) {
    if(cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c'){
      cadenamodificada += cadena[i]
    }
  }
  return cadenamodificada
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  function comparacion(a, b){
    return a.length - b.length
  // funcion que va a comparar el largo de dos strings
  // puede tener 3 valores restando el primero con el que le sigue
  // que sea menor a 0, lo que indica que el valor 'a' es menos largo
  // que sea igual a 0, lo que indica que tienen el mismo largo
  // que sea mayor a 0, lo que indica que el valor 'a' es mas largo
  }
  
  let arrayordenado = arr.sort(comparacion)
  //.sort es un metodo que recorre y ordena el array.
  // le pasamos como callback una funcion comparadora que devuelve 3 tipos de valores, menor a 0, 0 y 1
  // entonces compara los valores del array en base a esta funcion comparadora
  return arrayordenado
  //si comparacion es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero
  //si retorna 0, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes
  //si es mayor que 0, se sitúa b en un indice menor que a
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var interseccion = []
  for (let i = 0; i < arreglo1.length; i++) {
    for(let j = 0; j< arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        interseccion.push(arreglo1[i])
      }
    }
  }
  return interseccion
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

