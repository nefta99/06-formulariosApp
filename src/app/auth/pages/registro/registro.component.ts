import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  
//TODO: Temperal



  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.pattern(this.validatorservices.nombreApellidoPattern)]],
    email : ['',[Validators.required, Validators.pattern(this.validatorservices.emailPattern)],[this.emailValidator]],
    username: ['',[Validators.required,this.validatorservices.noPuedeSerStrider]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]],
  },{
    validators : [this.validatorservices.camposIguales('password','password2')]
  })



  


  get get_emailErrorMsg() : string{
    
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return "Email es obligatorio";
    }else if(errors?.pattern){
      return "El valor ingresado no tiene formato de correo electronico";
    }else if(errors?.emailTomado){
      return "El email ya fue tomado";
    }
    

    return "";

  }

  constructor(private fb : FormBuilder,
              private validatorservices: ValidatorService,
              private emailValidator : EmailValidatorService ) { }

  ngOnInit(): void {
    /*
      Con esto establecemos que nuestro formulario inicie con los valores de abajo definidos.
    */
    this.miFormulario.reset({
      nombre : 'Israel Neftali',
      email : 'test1@test.com',
      username: 'nefta99',
      password : '123456',
      password2: '123456'
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
