import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario! : NgForm;


  constructor() { }

  ngOnInit(): void {
  }

  hayErrorNombre() :  boolean{
    let bandera : boolean = false;
     
     if(this.miFormulario?.controls.Nombre?.errors && this.miFormulario?.controls.Nombre?.touched ){
       bandera =true;
     }


    return bandera;

  }


  guardar(){
     //console.log(this.miFormulario);    


     let bandera : boolean = false;
     //  console.log(this.miFormulario.controls.Nombre.errors);
     if(this.miFormulario!.controls.Nombre!.errors){
       bandera =true;
     }

     console.log("Hay error en nombre "+bandera);

  }


  
}
