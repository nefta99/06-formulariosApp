import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {


  miFormulario : FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(3)]]
  })
  constructor(private fb : FormBuilder) { }

 
  guardar(){
    if(this.miFormulario.valid){
      console.log("El formulario es valido")
      console.log("Contenido del formulario "+this.miFormulario.controls['nombre'].value)
    }
  }

  asd(){
    
  }
}
