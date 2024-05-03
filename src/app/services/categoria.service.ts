import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
http = inject(HttpClient);
constructor() { }

public listarCategorias(){
  return this.http.get(`${baseUrl}/categoria/`)
}

}
