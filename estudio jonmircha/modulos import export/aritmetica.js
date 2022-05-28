/* export function sumar(a,b){
    return a + b;
  }
  export function restar(a,b){
   return a-b;
  }
 aca exportaba las dos funciones por separado
 */


 function sumar(a,b){
  return a + b;
}
function restar(a,b){
 return a-b;
}
//al crear el objeto con las dos funciones no exporto cada una por separado con expor
//sumar yrestar quedan engobada en el objeto
export const artimetica={ 
    //sumar:sumar cuando el valor y la propiedad se llama igual lo dejamos comun
    sumar,
    restar
};



