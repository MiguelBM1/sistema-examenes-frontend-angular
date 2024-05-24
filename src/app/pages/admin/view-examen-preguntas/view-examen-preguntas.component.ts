import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PreguntaService } from '../../../services/pregunta.service';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';

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


}
