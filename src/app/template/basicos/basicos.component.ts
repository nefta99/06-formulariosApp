import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario! : NgForm;

  initForm={
    producto : 'Producto',
    precio: 10,
    existencia :10
  };


  constructor() { }

  ngOnInit(): void {
  }

  // guardar( miFormulario : NgForm){
  guardar(){
    // console.log(this.miFormulario);
    console.log("Posteo exítoso");

    //Esto es para restablecer un formulario
    this.miFormulario.resetForm({
      precio:0,
      existencia: 0,
      producto: 'Algo'
    });
   
  }

  nombreValido() : boolean{
    return this.miFormulario?.controls.producto?.invalid
    && this.miFormulario?.controls.producto?.touched
  }

  precioValido() : boolean{
    
  
    return this.miFormulario?.controls.precio?.touched && 
           this.miFormulario?.controls.precio?.value < 0;
    
    
 
    
  }

}
