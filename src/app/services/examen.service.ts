import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class ExamenService {
http = inject(HttpClient);

public listarCuestionarios(){
  return this.http.get( `${baseUrl}/examen/`);
}

public agregarCuestionario(examen:any){
 return this.http.post(`${baseUrl}/examen/`,examen);
}

public eliminarCuestionario(examenId:any){
  return this.http.delete(`${baseUrl}/examen/${examenId}`);

}
}
