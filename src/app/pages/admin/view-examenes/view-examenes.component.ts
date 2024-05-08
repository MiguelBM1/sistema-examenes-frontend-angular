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

}
