"use strict";

const ConsoleLogger = require("@11ty/eleventy/src/Util/ConsoleLogger");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo 
    nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback.
   En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, 
   buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par,
   busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList {
  constructor(){
    this.head=null;
  }
  
}
LinkedList.prototype.add=function(value){
  var nodo = new Node(value);
  let current= this.head;
  if(current==null){
    this.head=nodo; 
    return this.head;
  }
  while(current.next){
    current=current.next;
  }
  current.next=nodo;
  return this.head;
}
LinkedList.prototype.remove=function(){/**REMUEVE EL ULTIMO ELEMENTO DE LA LISTA contempla 
(tener en cuenta el caso particular de una lista de un solo 
  nodo y de una lista vacía)*/
  //console.log(this.head);
  //console.log('///////');
  if(this.head==null){
    return null;
  }
  if(this.head.value==null){
    this.head=null;
    return null;
    
  } 
  var current = this.head;
  var eliminar=null;
  while(current.value!=null){
    //console.log('Actual->');
    //console.log(current);
    
    if(current.next==null || current.next.value==null){
      eliminar=current.value;
      //console.log('eliminar '+ eliminar);
      current.value=null;
      current.next=null;
      return eliminar;
    }
    current = current.next;
    
    
    }
    
}
/**
 * search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback.
   En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, 
   buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par,
   busca un nodo cuyo valor sea un número par.
  *
   En caso de que la búsqueda no arroje resultados, search debe retornar null.
 **/
LinkedList.prototype.search=function(find){
  //console.log('/////BUSCAR/// '+find);
  var resultado= null;
  let current = this.head;
  //console.log(typeof find);
  while(current){
    //console.log('actual->'+current.value);
    if(current.value==find){
      resultado=current.value;
      return resultado;
    }
    if(typeof find=="function"){
      if(find(current.value)){
        return current.value;
      }
    }
    current=current.next;
  }
  return resultado;

}
LinkedList.prototype.list=function(){
  let current= this.head;
  while(current){
    console.log(current.value);
    current=current.next;
  }  
}
var lista = new LinkedList();

//console.log(lista.add('uno'));
//console.log(lista.add('dos'));
//console.log(lista.add('tres'));
//console.log(lista.add('cuatro'));
//lista.list();
//console.log('eliminado: '+lista.remove());
//console.log('eliminado: '+lista.remove());
//console.log(lista.remove());
//lista.list();
//console.log(lista.search('tres'));
//console.log(lista.search('uno'));
//console.log(lista.search('SDD'));
//console.log(lista.search('cuatro'));
//console.log(lista.search(  function(nodeValue) {/*console.log('NODE VALUE'+nodeValue);*/return nodeValue === 'tres';  }));
/*var n= new Node('uno');
var n1= new Node('dos');
var n2= new Node('tres');
var n3= new Node('cuatro');*/
//console.log(n);
/*n.next=n1;
n1.next=n2;
n2.next=n3;
*7
//console.log(n);
/*var actual=n;
while(actual.next){
  //console.log(':-> '+actual.value);
  actual=actual.next;
}*/
function Node(value) {
  this.value=value;
  this.next=null;
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets 
(slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), 
donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, 
  suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) 
  y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable{
  constructor(){

  this.numBuckets = 35;
  this.hashtable=[];
}

}
/**
 * suma el código numérico de cada caracter del input 
 * (investigar el método charCodeAt de los strings)
 * calcula el módulo de ese número total por la cantidad de buckets;
 * de esta manera determina la posición de la tabla en la que se almacenará el dato.
 * 
**/
HashTable.prototype.hash=function(input){
  let sum=0;
  for(let i=0;i<input.length;i++){
    sum+=input.charCodeAt(i);
    //console.log(input[i]);
    //console.log(input.charCodeAt(i));
    //console.log('////');
  }
  var sitio=sum%this.numBuckets;
  return sitio;


}
/**
 * set: recibe el conjunto clave valor (como dos parámetros distintos),
 *  hashea la clave invocando al método hash,
 *  y almacena todo el conjunto en el bucket correcto.
 */
HashTable.prototype.set=function(key,val){
  /*if (typeof key != "string") {
    throw new TypeError("Keys must be strings");
  }*/
  var hashing= new HashTable();
  let claveHash=hashing.hash(key);  
  let contenido = new contenedor(claveHash,key,val);
  let arrContenidos=this.hashtable[claveHash];
  if(arrContenidos){
    var banderaelemento=false;
    //console.log(arrContenidos.length);
    for (const keyarray in arrContenidos) {
      if(arrContenidos[keyarray].keystr==key){
      banderaelemento=true;
        arrContenidos[keyarray].value=val;
      }
    }
    if(!banderaelemento){
      arrContenidos.push(contenido);
      this.hashtable[claveHash]=arrContenidos;
    }
    //console.log(this.hashtable[claveHash]);
  }else{
    this.hashtable[claveHash]= [contenido];
  }
 
}
/**
 * recibe una clave por parámetro, y
 *  busca el valor que le corresponde en el bucket correcto de la tabla.
 */
HashTable.prototype.get=function(key){
  var element
  var hashing= new HashTable();
  let claveHash=hashing.hash(key);
  let arrContenidos=this.hashtable[claveHash];
  if(arrContenidos){
    for (const keyarray in arrContenidos) {
      if(arrContenidos[keyarray].keystr==key){
        //console.log();
        element=arrContenidos[keyarray].value;
        //console.log(element);
      }
    }
  }
  return element;
}
/**
 * Devuelve booleano
 * @param {string} key 
 */
  HashTable.prototype.hasKey=function(key){
  let exist=false;
    var hashing= new HashTable();
    let claveHash=hashing.hash(key);
    let arrContenidos=this.hashtable[claveHash];
    if(arrContenidos){
      for (const keyarray in arrContenidos) {
        if(arrContenidos[keyarray].keystr==key){
          exist=true;

        }
      }
    }
  return exist;
}
class contenedor{
  constructor( keyhash,keystr,value){
    this.keystr = keystr;
    this.keyhash = keyhash;
    this.value= value;
  }
}
var hashTable = new HashTable();
//console.log(h.hash('what about this one'));
//hashTable.set('key1', 'val1');
//hashTable.set('this is a very different string', 44.4);
//console.log(hashTable.get('key1'));
//console.log(hashTable.get('this is a very different string'));
//console.log(hashTable.set(false, 'val1'));
//hashTable.set('foo', 'bar1');
//si haskey es falso, meter elemento nuevo, despues comprobar haskey para cuandohaya mas de un elemento
//hashTable.set('ofo', 'bar2');
//console.log(hashTable.hasKey('ofo'));//debe regresar bar2
//console.log(hashTable.get('foo'));
//console.log(hashTable.get('ofo'));
hashTable.set('key1', 'val1');
hashTable.set('key2', 'val2');
console.log(hashTable.get('key1'));
console.log(hashTable.get('key2'));



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
