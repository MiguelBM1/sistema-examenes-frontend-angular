import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import baseUrl from '../../../services/helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public loginStatusSubject = new Subject<boolean>();

  apiUrl = `${baseUrl}`;
  httpClient = inject(HttpClient);

  //generar el token
  public generteToken(loginData: any) {
    return this.httpClient.post(`${this.apiUrl}/generate-token`, loginData);
  }

  //iniciar sesion y establecer token en Local Storage

  public loginUser(token: any) {
    localStorage.setItem('token', token);
  }

  public isLoggedIn() {
    if(typeof localStorage !== 'undefined' ){
      let tokenStr = localStorage.getItem('token');
      if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
        
        return false;
        }else{
          return true;
        }
    }else{
      return false;
    }
 
  }
  // cerrar cesion eliminar del localStorage
  public logout(){
  localStorage.removeItem('token');
  
  localStorage.removeItem('user');
  return true;
  }

  // obtener token almacenado en LocalStorage
  public getToken(){
  return localStorage.getItem('token')
  }

  public setUser(user: any){
  localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(){
    if(typeof localStorage !== 'undefined' ){
      let userStr = localStorage.getItem('user');
      if(userStr != null){
        return JSON.parse(userStr);
      }else{
        this.logout();
        return null;
      }
    }
    
  }

  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  
  public getCurrentUser(){
    return this.httpClient.get(`${this.apiUrl}/actual-usuario`);
  }

  
}
