console.log("*********************");
console.log("*Archivo Modulos.js *");
console.log("*********************");
console.log(" ");
//cuando trabajamos con modulos priemro hacemos la 
/*1)importacion de modulos
  2)declaracion de variables
  3)declaracion de funciones 
  4)ejecucion de codigo
  
*/
//llamamos la constante de modulos
import {PI} from "./constantes.js";
console.log(PI);
console.log(" ");
import {usuario} from  "./constantes.js";
console.log(usuario);

// como las englobe  en un objeto no es necesario llamarlas dos 
//import{sumar,restar} from "./aritmetica.js";

console.log(" ");
import {artimetica} from "./aritmetica.js";

// las llamadas sin el objeto aritmetica console.log(sumar(24,5));
//console.log(restar(24,5));

console.log("con el objeto aritmetica:");
console.log(" ");
console.log(artimetica.sumar(24,5));
console.log(artimetica.restar(24,5));
console.log(" ");