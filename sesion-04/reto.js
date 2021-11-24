/* en un zoologico dos tipos de animales. patos y tortugas.
60 cabezas.
200 patas.
cuantos patos y cuantas tortugas.
 */

/* resultado
40 tortugas
20 patos */

/* Problema 2. Arrays.
Completar la función pluck que extrae una lista de propiedades de un arreglo de objetos. */

var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];

  function pluck(arrayList, propertyName) {
    var valor = [];
    var i;
    for ( i=0; i < arrayList.length; i++){
        valor.push( arrayList[i][propertyName]);
    }
    return valor;
  }
  
  console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
  console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
  console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]


  /* Array Method .map()
  The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.
  
  The original array does not get altered, and the returned array may contain different elements than the original array.
  
 */

//Problema 3 Objeto
//crear una funcion que haga lo opuesto a esta. la función recibira un arreglo con pares [key, value] y debe retornar un objeto con sus respectivas propiedades y valores.
/* function keyValuePairs(obj) {
    var keys = Object.keys(obj);
    var pairs = [];

    for(var i = 0; i < keys.length; i++) {
      pairs.push( [keys[i], obj[keys[i]]] )
    }

    return pairs;
}
 */

/* function array(arr){
    var object = {};
    for (var i = 0; i < arr.length; i++){
        object[arr[i][0]] = arr[i][1]
    }
    return object;
}

array(); */