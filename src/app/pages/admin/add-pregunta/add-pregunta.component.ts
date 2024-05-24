import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pregunta',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MatInputModule],
  templateUrl: './add-pregunta.component.html',
  styleUrl: './add-pregunta.component.css'
})
export class AddPreguntaComponent {

  examenId: any;
  pregunta: any = {
    examen:{

    },
    contenido: '',
    opcion1: '',
    opcion2: '',
    opcion3: '',
    opcion4: '',
    respuesta: ''

  };

  private readonly __route = inject(ActivatedRoute);

  ngOnInit(){
    this.examenId = this.__route.snapshot.params['examenId'];
    this.pregunta.examen['examenId'] = this.examenId;
  }
}
