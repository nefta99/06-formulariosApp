import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona{
  nombre:string ;
  favoritos : Favorito[]
}

interface Favorito{
  id:number;
  nombre:string ;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  @ViewChild('miFormulario') miFormulario! : NgForm;

  persona : Persona = {
    nombre:  'Israel',
    favoritos:[
      {
        id: 1,
        nombre:'Metal Gear'
      },
      {
        id: 2,
        nombre:'Death Stranding'
      },
    ]
  }
 

  hayErrorNombre() :  boolean{
    let bandera : boolean = false;
     
     if(this.miFormulario?.controls.nombre?.errors && this.miFormulario?.controls.nombre?.touched ){
       bandera =true;
     }


    return bandera;

  }


  guardar(){
     console.log(this.miFormulario);    


    

     

  }


  
}
