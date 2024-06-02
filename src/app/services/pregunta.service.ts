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
}