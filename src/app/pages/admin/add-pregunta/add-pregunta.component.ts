import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pregunta',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule, MatOptionModule, MatButtonModule, FormsModule],
  templateUrl: './add-pregunta.component.html',
  styleUrl: './add-pregunta.component.css'
})
export class AddPreguntaComponent {

  examenId: any;
  titulo: any;
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
    this.titulo = this.__route.snapshot.params['titulo'];
    this.pregunta.examen['examenId'] = this.examenId;
  }
}
