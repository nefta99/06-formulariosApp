import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {


  miFormulario : FormGroup  = new FormGroup({
    //Esto tiene que concordar en el html con la propiedad formControlName = "nombre"
    'nombre' : new FormControl('RTX 4080ti')
  })
  constructor() { }

  

}
