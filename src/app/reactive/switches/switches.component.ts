import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit  {

  miFormulario  :FormGroup = this.fb.group({
      genero: ['M',Validators.required],
      notificaciones: [false,Validators.required],
      condiciones:[false,Validators.requiredTrue]
  });

  persona = {
    genero : 'F',
    notificaciones : true,

  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(){
    //Esta iniciando los valores del formulario con este objeto de this.persona.
    this.miFormulario.reset({
      ...this.persona,
      /*
        Esto de condicion esta agregado dentro del objetoi miformulario
        Pero  no dentro de persona entonces con este codigo dentro del oninit
        logramos que se establesca el control de condiciones como en false para que el 
        html lo marque como false y el miFormulario.valid este como false
      */
      condiciones : false 
    });


    /*
      Se comenta el codigo para demostrar que abajo hace lo mismo.
    */
    // this.miFormulario.valueChanges.subscribe(form =>{
    //   delete form.condiciones;
    //   this.persona = form;
    // })

    
    /*Esto es para hacer lo mismo de arriba es exactamente igual
      Lo unico que hacer es desestructar el formulario y quitar el las condiones
      y con el operador rest ya quitada la variable condiciones pasa el perador rest a el objeto persona
    */
    this.miFormulario.valueChanges.subscribe(({condiciones, ...rest}) =>{
      //delete form.condiciones;
      this.persona = rest;
    })


  }

  guardar(){

    const formvalue = {...this.miFormulario.value};

    delete formvalue.condiciones;
    
    this.persona = formvalue;
  }

}
