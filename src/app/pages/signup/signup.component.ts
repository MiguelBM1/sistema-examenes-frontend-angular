import { Component, OnInit, inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UserService } from '../../services/user.service';
import { IUsuario } from '../../services/models/usuario.interface';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { PasswordMatcher, crossPasswordMatchingValidator, customPasswordValidator } from './register-custom-validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  standalone: true,
  styleUrls: ['./signup.component.css'],
  imports: [MatCardModule ,MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule]
})
export class SignupComponent {
  private readonly _formBuilder = inject(FormBuilder);
   
  passwordMatcher = new PasswordMatcher();
  user: IUsuario = Object.create(null);
  userService = inject(UserService);

  /*formGroup = this._formBuilder.nonNullable.group({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
    
  });
  */

  formGroup = this._formBuilder.nonNullable.group({
    username: ['',Validators.required],
    password: ['',[Validators.required,customPasswordValidator]],
    email: ['',[Validators.required,Validators.email]],
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    telefono: ['',Validators.required],
    confirmarPassword: ['',Validators.required],    
  }, {validators: crossPasswordMatchingValidator}
);


  formSubmit(){

    if(this.formGroup.valid){
      this.user = {
        username: this.formGroup.get('username')!.value,
        password: this.formGroup.get('password')!.value,
        email: this.formGroup.get('email')!.value,
        nombre: this.formGroup.get('nombre')!.value,
        apellido: this.formGroup.get('apellido')!.value,
        telefono: this.formGroup.get('telefono')!.value,
      } 
    }

    this.userService.agregarUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('Usuario creado');
      },
      (error) => {
        console.log(error);
        alert('Error al crear el usuario');
      }
    );
    
  }
  
}
