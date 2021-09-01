import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  
//TODO: Temperal
  nombreApellidoPattern : string ='([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerStrider(control : FormControl){
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

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.pattern(this.nombreApellidoPattern)]],
    email : ['',[Validators.required, Validators.pattern(this.emailPattern)]],
    username: ['',[Validators.required,this.noPuedeSerStrider]],
  })

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    /*
      Con esto establecemos que nuestro formulario inicie con los valores de abajo definidos.
    */
    this.miFormulario.reset({
      nombre : 'Israel Neftali',
      email : 'israelneftali@gmail.com',
      username: 'nefta99'
    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
          && this.miFormulario.get(campo)?.touched;
  }
  submitFormulario(){

    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
