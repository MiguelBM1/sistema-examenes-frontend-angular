import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from '../../../services/pregunta.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  private readonly __preguntaService = inject(PreguntaService);
  private readonly __snackBar = inject(MatSnackBar);
  ngOnInit(){
    this.examenId = this.__route.snapshot.params['examenId'];
    this.titulo = this.__route.snapshot.params['titulo'];
    this.pregunta.examen['examenId'] = this.examenId;
  }

  onSubmit(){
    if(this.pregunta.contenido.trim() == '' || this.pregunta.contenido == null){
     this.__snackBar.open('El contenido de la pregunta es requerido', '', {
        duration: 3000
      });
      return;
    }

    if(this.pregunta.opcion1.trim() == '' || this.pregunta.opcion1 == null){
      this.__snackBar.open('La opcion 1 es requerida', '', {
        duration: 3000
      });
      return;
     }

      if(this.pregunta.opcion2.trim() == '' || this.pregunta.opcion2 == null){
        this.__snackBar.open('La opcion 2 es requerida', '', {
          duration: 3000
        });
        return;

      }

      if(this.pregunta.opcion3.trim() == '' || this.pregunta.opcion3 == null){
        this.__snackBar.open('La opcion 3 es requerida', '', {
          duration: 3000
        });
        return;
      }

      if(this.pregunta.opcion4.trim() == '' || this.pregunta.opcion4 == null){
        this.__snackBar.open('La opcion 4 es requerida', '', {
          duration: 3000
        });
        return;
      }

      if(this.pregunta.respuesta.trim() == '' || this.pregunta.respuesta == null){
        console.log(this.pregunta.respuesta);
        this.__snackBar.open('La respuesta es requerida', '', {
          duration: 3000
        });
        return;
      }

      this.__preguntaService.guardarPregunta(this.pregunta).subscribe(
        
        (data: any) => {
          Swal.fire('Exito', 'Pregunta guardada', 'success');
          this.pregunta.contenido = '';
          this.pregunta.opcion1 = '';
          this.pregunta.opcion2 = '';
          this.pregunta.opcion3 = '';
          this.pregunta.opcion4 = '';
          this.pregunta.respuesta = '';
        },(error) => {
          Swal.fire('Error', 'Error al guardar la pregunta', 'error');
        }
      )

  }

}
