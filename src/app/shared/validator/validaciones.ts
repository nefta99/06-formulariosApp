import { FormControl } from '@angular/forms';





  export const nombreApellidoPattern : string ='([a-zA-Z]+) ([a-zA-Z]+)';
  export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";








  ////funciones

  //Se utiliza la funcion de flecha
export const   noPuedeSerStrider = (control : FormControl) => {
    const valor : string = control.value?.trim().toLowerCase();
    if(valor === 'strider'){
      // return Error!
      return {
        noStrider :true
      }
    }
    //Significa que esta bien 
    return null
}


// noPuedeSerStrider(control : FormControl){
//     const valor : string = control.value?.trim().toLowerCase();
//     if(valor === 'strider'){
//       // return Error!
//       return {
//         noStrider :true
//       }
//     }
//     //Significa que esta bien 
//     return null
//   }