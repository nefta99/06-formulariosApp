import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {


  // miFormulario : FormGroup  = new FormGroup({
  //   //Esto tiene que concordar en el html con la propiedad formControlName = "nombre"
  //   nombre      : new FormControl('RTX 4080ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(5),
  // })


  miFormulario : FormGroup =this.fb.group({
    nombre      : ['RTZs 4080ti',[Validators.required,Validators.minLength(3)]],
    precio      : [0,[Validators.required,Validators.min(0)]],
    existencias : [0,[Validators.required,Validators.min(0)]],
  })

  constructor(private fb : FormBuilder) { }

  

}
