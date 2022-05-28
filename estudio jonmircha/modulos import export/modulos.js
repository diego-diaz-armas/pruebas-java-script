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
import saludar,{Saludar,PI} from "./constantes.js";
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

//la funcion default se exporta automaticamente sin el import
//esta agregado en el import de PI
// import saludar,{PI} from "./constantes.js";

saludar();
console.log(" ");
//el usu de la clase
let saludo=new Saludar();
//console.log(saludo);
saludo;
console.log(" ");

//alias para aritmetica
import {artimetica as calc } from "./aritmetica.js";
console.log(" ");
console.log("alias para la funcion aritmetica:");
console.log(calc.sumar(24,5));
console.log(calc.restar(24,5));
console.log(" ");


//importaciones en react es muy comun ver 
/*
 import React, (component) from "React ";
 si lo googleamos vemos que importan los modulo en react 
*/

