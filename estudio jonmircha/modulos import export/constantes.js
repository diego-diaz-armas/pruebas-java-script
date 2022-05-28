console.log("estoy llamando potros modulos desde modulos.js");
console.log("aca voy a poner constantes");
console.log(" ");
export const PI=Math.PI;

export let usuario = "diego";

let password= "qwerty";
// puedo exportar lo que necesito

export default function saludar(){  /*default*/ 
    console.log(`hola `+ usuario);
}//lo comnento para usar el default en la class

//no se puede tener mas de una exportacion default
// el default es una funcion declarada 
//no se podria poner una variable default por que sirve para funciones expresadas

//funcion expresada
/*si nesesitara exportar una variable por default

let password="qwerty";
export default password;

asi se podria pasar por default

cuando algo va a ser exportado por default carga da error en una sola linea 
primero hay que hacer la declaracion y luego exportarla
por culpa del hoysting

solo se puede exportar directamente las classes o funciones
*/ 

const hello=()=>console.log(`hola `+ usuario);

export class Saludar{
    constructor(){
        console.log("hola modulo classes +ES6");
    }
}