import { Component} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {


  miFormulario : FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear',Validators.required],
      ['Death Stranding', Validators.required],
    ],Validators.required)
  })


  nuevoFavorito : FormControl = this.fb.control('',Validators.required);

  constructor(private fb : FormBuilder) { }

 
  get get_favoritosArr(){
    
    return this.miFormulario.get('favoritos') as FormArray;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    //imprimir los valor del formulario, solo si es valido
    console.log(this.miFormulario.value);
  }

  asd(){
    
  }

  campoEsValido(campo : string ){
    
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;

  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){      return;   }

    //Con formcontrols
    //this.get_favoritosArr.push(new FormControl(this.nuevoFavorito.value,Validators.required));

    //con formbuilder
    this.get_favoritosArr.push(this.fb.control(this.nuevoFavorito.value,Validators.required));
    
    this.nuevoFavorito.reset();
  }


  borrar(i :number){
    //this.miFormulario.spl
    this.get_favoritosArr.removeAt(i);
  }
}
