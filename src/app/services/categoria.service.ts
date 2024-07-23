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

public agregarCategoria(categoria: any){
    return this.http.post(`${baseUrl}/categoria/`, categoria)
}

public eliminarCategoria(id: number){
  return this.http.delete(`${baseUrl}/categoria/${id}`)
}

}
