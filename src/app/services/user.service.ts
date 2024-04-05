import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import baseUrl from './helper';
import { IUsuario } from './models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpClient = inject(HttpClient);
  apiUrl = `${baseUrl}`;

  public agregarUsuario(usuario: IUsuario) {
    return this.httpClient.post(`${this.apiUrl}/usuarios/`, usuario);
  }

}
