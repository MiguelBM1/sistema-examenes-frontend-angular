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

public obtenerExamen(examenId: any){
  return this.http.get(`${baseUrl}/examen/${examenId}`);
}

public actualizarExamen(examen:any){
  return this.http.put(`${baseUrl}/examen/`,examen);
}

public listarExamenesPorCategoria(catId:any){
  return this.http.get(`${baseUrl}/examen/categoria/${catId}`);
}

public obtenerExamenesActivos(){
  return this.http.get(`${baseUrl}/examen/activo`);
}

public obtenerExamenesActivosPorCategoria(catId:any){
  return this.http.get(`${baseUrl}/examen/categoria/activo/${catId}`);
}
}
