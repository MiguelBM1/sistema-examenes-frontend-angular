import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PreguntaService } from '../../../services/pregunta.service';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-examen-preguntas',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatDividerModule,MatButton],
  templateUrl: './view-examen-preguntas.component.html',
  styleUrl: './view-examen-preguntas.component.css'
})
export class ViewExamenPreguntasComponent implements OnInit{

  examenId: any;
  titulo: any;
  preguntas: any = [];
  private readonly __route = inject(ActivatedRoute);
  private readonly __preguntaService = inject(PreguntaService);
  private readonly __snackBar = inject(MatSnackBar);
  
  ngOnInit(){
    this.examenId = this.__route.snapshot.params['examenId'];
    this.titulo = this.__route.snapshot.params['titulo'];
    console.log(this.examenId);
    console.log(this.titulo);
    this.__preguntaService.listarPreguntasDelExamen(this.examenId).subscribe(
      (data: any) => {
        console.log(data);
        this.preguntas = data;
      },
      (error) => {
        console.log(error);
      }
    )
    
  }

  eliminarPregunta(preguntaId: any){
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'No podras revertir esta accion',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.__preguntaService.eliminarPregunta(preguntaId).subscribe(
          (data) => {
         this.__snackBar.open('Pregunta eliminada', '', {
            duration: 3000
          });
          this.preguntas = this.preguntas.filter((pregunta: any) => pregunta.preguntaId != preguntaId);
        
         },(error) => {
            this.__snackBar.open('Ocurrio un error al eliminar la pregunta', '', {
              duration: 3000
            });
          }
        )
      }
    })
  }

}
