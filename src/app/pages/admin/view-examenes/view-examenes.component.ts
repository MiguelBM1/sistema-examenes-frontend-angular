import { Component, OnInit, inject } from '@angular/core';
import { ExamenService } from '../../../services/examen.service';
import Swal from 'sweetalert2';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-examenes',
  templateUrl: './view-examenes.component.html',
  styleUrls: ['./view-examenes.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatButtonModule, RouterLink]
})
export class ViewExamenesComponent implements OnInit {

  examenes: any = [
  
  ]
  router = inject(Router);
  examenService =  inject(ExamenService);
  ngOnInit() {
    this.examenService.listarCuestionarios().subscribe(
      (data: any) => {
        this.examenes = data;
        console.log(this.examenes);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Ocurrio un error al listar los examenes', 'error')
      }
    )
  }

  eliminarExamen(examenId: any) {

    Swal.fire({
      title: '¿Estas seguro de eliminar el examen?',
      text: "No podras revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.examenService.eliminarCuestionario(examenId).subscribe(
            (data: any) => {
              Swal.fire(
                'Eliminado!',
                'El examen ha sido eliminado.',
                'success'
              )
              this.ngOnInit();
            },
            (error: any) => {
              console.log(error);
              Swal.fire('Error', 'Ocurrio un error al eliminar el examen', 'error')
            }
          )
        }
      })
  }
}
