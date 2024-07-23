import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  private readonly __http= inject(HttpClient);

  public listarPreguntasDelExamen(examenId: any){
    return this.__http.get(`${baseUrl}/pregunta/examen/${examenId}`);
  }

  public guardarPregunta(pregunta: any){
    return this.__http.post(`${baseUrl}/pregunta/`, pregunta);
  }

  public eliminarPregunta(preguntaId: any){
    return this.__http.delete(`${baseUrl}/pregunta/${preguntaId}`);
  }

  public obtenerPregunta(preguntaId: any){
    return this.__http.get(`${baseUrl}/pregunta/${preguntaId}`);
  }

  public actualizarPregunta(pregunta: any){
    return this.__http.put(`${baseUrl}/pregunta/`, pregunta);
  }

  public listarPreguntasPrueba(examenId: any){
    return this.__http.get(`${baseUrl}/pregunta/examen/todos/${examenId}`);
  }

  public evaluarExamen(preguntas: any){
    return this.__http.post(`${baseUrl}/pregunta/evaluar-examen`, preguntas);
  }
}
