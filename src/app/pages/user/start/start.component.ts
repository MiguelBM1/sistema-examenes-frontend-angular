import { LocationStrategy } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PreguntaService } from '../../../services/pregunta.service';
import Swal from 'sweetalert2';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-start',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatDividerModule,MatProgressSpinnerModule, FormsModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent implements OnInit {

  private readonly __locationSt = inject(LocationStrategy);
  private readonly __route = inject(ActivatedRoute);
  private preguntaService = inject(PreguntaService);

  examenId: any;
  preguntas: any;
  puntosConseguidos = 0;
  respuestasCorrectas = 0;
  intentos = 0;
  timer: any

  esEnviado=false;



  ngOnInit(): void {
    this.prevenirElbotondeRetroceso();
    this.examenId = this.__route.snapshot.params['examenId'];
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    this.preguntaService.listarPreguntasDelExamen(this.examenId).subscribe(
      (data: any) => {
        this.preguntas = data;

        this.timer = this.preguntas.length *2 *60;
        this.preguntas.forEach((pregunta: any) => {
          pregunta.respuestaDada = '';
 
        }
        );
        console.log(this.preguntas);
        this.iniciarTemporizador();
      },
      (error) => {
        Swal.fire('Error', 'No se pudieron cargar las preguntas', 'error');
        console.log(error);
      })
  }


  prevenirElbotondeRetroceso() {
    history.pushState(null, null!, location.href);
    this.__locationSt.onPopState(() => {
      history.pushState(null, null!, location.href);

    })
  }

  enviarCuestionario() {

    Swal.fire({
      title: '¿Estas seguro de enviar el cuestionario?',
      showCancelButton: true,
      confirmButtonText: 'Si, enviar',
      cancelButtonText: 'No, cancelar',
      icon: 'warning'
    }).then((result) => {
      if (result.isConfirmed) {
        this.evaluarExamen();
      }
    })
  }

  iniciarTemporizador(){
    let t = window.setInterval(() => {
      if(this.timer <=0){
        this.evaluarExamen();
        clearInterval(t);
      }else{
        this.timer--;
      }
    },1000)
  }

  obtenerHoraFormateada(){
  
    let mm = Math.floor(this.timer/60);
    let ss = this.timer % 60;
    return `${mm} min : ${ss} seg`;
  }

  evaluarExamen(){
    this.esEnviado = true;
    this.preguntas.forEach((pregunta: any) => {
      if (pregunta.respuestaDada == pregunta.respuesta) {
        this.respuestasCorrectas++;
        let puntos = this.preguntas[0].examen.puntosMaximos/this.preguntas.length;
        this.puntosConseguidos += puntos;

      }
      if (pregunta.respuestaDada.trim() != '') {
        
        this.intentos++;
      }
    })

    console.log('Respuestas correctas: ' + this.respuestasCorrectas);
    console.log('Puntos conseguidos: ' + this.puntosConseguidos);
    console.log('Intentos: ' + this.intentos);
    
  }
}
