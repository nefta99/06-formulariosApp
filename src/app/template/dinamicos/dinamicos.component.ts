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
     
     if(this.miFormulario?.controls.nombre?.errors && this.miFormulario?.controls.nombre?.touched ){
       bandera =true;
     }


    return bandera;

  }


  guardar(){
     console.log(this.miFormulario);    


    

     

  }


  
}
