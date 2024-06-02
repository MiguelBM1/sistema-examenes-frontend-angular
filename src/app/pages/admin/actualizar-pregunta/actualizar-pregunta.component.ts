import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntaService } from '../../../services/pregunta.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-pregunta',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule, MatOptionModule, MatButtonModule, FormsModule],
  templateUrl: './actualizar-pregunta.component.html',
  styleUrl: './actualizar-pregunta.component.css'
})
export class ActualizarPreguntaComponent implements OnInit{

  preguntaId: any;
  
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
  private readonly __router = inject(Router);
  ngOnInit(): void {
    this.preguntaId = this.__route.snapshot.params['preguntaId'];
    this.__preguntaService.obtenerPregunta(this.preguntaId).subscribe(
      (data: any) => {
        this.pregunta = data;
      },
      (error) => {
        console.log(error);
      }
    )
    
  }



  onEditar(){
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

      this.__preguntaService.actualizarPregunta(this.pregunta).subscribe(
        (data: any) => {
          Swal.fire('Exito', 'Pregunta actualizada', 'success');
          this.__router.navigate(['/admin/ver-preguntas/'+this.pregunta.examen.examenId+'/'+this.pregunta.examen.titulo]);
        },(error) => {
          console.log(error);
          this.__snackBar.open('Ocurrio un error al actualizar la pregunta', '', {
            duration: 3000
          });
        }
      )
  }

}
