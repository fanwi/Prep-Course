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
  let array = []
    for (x in objeto){ //por cada propiedad en objeto
      array.push([x, objeto[x]]) //pusheamos, 'propiedad, valor' (elemento, objeto[elemento] (el valor))
    }
    return array
  }


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let arrayletras = string.split('')
   //el bucle va a pasar por todos los elementos del array, si letras[e] = 0, significa que era su primera aparición,
   //entonces le sumo 1, letra[e] = 1 ahora.
   //si letras[e] existe, significa que ya estaba, entonces, le sumo + 1 y lo que ya tenía, letras = letras + 1
  let letras = {}
  arrayletras.forEach(function(elemento, indice){ 
    letras[elemento] = ( letras[elemento] || 0 ) + 1; 
  })
  return letras
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let letras = s.split('')
  let mayusculas = []
  let minusculas = []

  for(let i = 0; i<letras.length;i++){
    if(letras[i] === (letras[i]).toUpperCase()){
      mayusculas.push(letras[i])
      //si la letra, es igual a la letra en mayuscula, o sea, que sea mayuscula: 
      //la agregamos en letras mayusculas
     
    }else{
      minusculas.push(letras[i])    
     //si la letra no es igual a la misma letra en mayuscula, o sea es minuscula:
     //la agregamos en letras minusculas
    }
  } mayusculas = mayusculas.join('') //unimos todas las letras mayusculas en un solo string
    minusculas = minusculas.join('') //unimos todas las letras minusculas en un solo stirng.
    return mayusculas + minusculas //unimos las mayusculas primero y luego las minusculas.
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let split = str.split(' ') //acá separamos la frase en palabras
  let mirror = split.map(function(elemento){
    return elemento.split('').reverse().join(''); 
    //por cada palabra, la separamos en letras, la hacemos reversa, y la unimos otra vez.
  }).join(' ')
  //unimos todas las palabras que hicimos en reversa.
  return mirror

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let split = numero.toString().split('').reverse().join('')
  //aca pasamos el numero a string, luego lo dividimos, lo pusimos en reversa, y lo conectamos
  //ejemplo, 123 > 1, 2, 3> 3, 2, 1> 321
  //si el numero es capicua, o sea que al voltearlo se lee igual, es capicua, sino, retornamos que no.
  if(numero == split){
    return 'Es capicua'
  } return 'No es capicua'

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadena2 = ''
  for (let i = 0; i<cadena.length; i++){
    if(cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c' ){
      cadena2 += ''
    }else{
      cadena2 += cadena[i]
    }
  } return cadena2
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  function comparacion(a, b){
  return a.length-b.length
  //si devuelve -1, a se va a situar en una posicion menor que b
  //si devuelve 0, se quedan como estan
  //si devuelve 1, b se va a situar en una posicion menor que a 
  }
  let array = arr.sort(comparacion)
  return array

}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arreglo = []
  arreglo1.map(function(elemento){
    for(let i=0; i<arreglo2.length; i++){
      if(elemento === arreglo2[i]){
        arreglo.push(elemento)
      }
    }
  })
  return arreglo
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

