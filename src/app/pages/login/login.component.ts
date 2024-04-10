import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {  MatCardModule } from '@angular/material/card';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ILoginData } from './interfaces/login.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [MatCardModule ,MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  loginData : ILoginData = Object.create(null);
  loginService = inject(LoginService);
  
  ngOnInit() {
  }

  formSubmit(){
    
    if(!this.loginData.username){
      this._snackBar.open('El nombre de usuario es requerido!!', 'Close', {
        duration: 2000,
      });
  }

  if(!this.loginData.password){
    this._snackBar.open('La contraseña es requerida!!', 'Close', {
      duration: 2000,
    });
  }

  this.loginService.generteToken(this.loginData).subscribe(
     (data: any) => {
        console.log(data);

        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user: any) => {
            console.log(user);
      })
    },(error) => {
        console.log(error);
      }
    )
  }

  

}
