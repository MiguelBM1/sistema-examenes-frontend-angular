import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ExamenService } from '../../../services/examen.service';
import { MatCardModule } from '@angular/material/card';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instrucciones',
  standalone: true,
  imports: [MatCardModule,MatDividerModule,RouterLink, MatButtonModule],
  templateUrl: './instrucciones.component.html',
  styleUrl: './instrucciones.component.css'
})
export class InstruccionesComponent {

  examenId:any;
  examen:any = new Object();

  private readonly __route = inject(ActivatedRoute);
  private readonly __examenService = inject(ExamenService);
  private readonly __router = inject(Router);
  
  ngOnInit():void{
    this.examenId = this.__route.snapshot.params['examenId'];
    this.__examenService.obtenerExamen(this.examenId).subscribe(
      (data: any) => {
        this.examen = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  empezarExamen(){
    Swal.fire({
      title: '¿Estas seguro de comenzar el examen?',
      showCancelButton: true,
      confirmButtonText: 'Si, comenzar',
      cancelButtonText: 'No, cancelar',
      icon: 'question'
    }).then((result) => {
      if(result.isConfirmed){
        this.__router.navigate(['/start/'+this.examenId]);

      }
    })
  }

}
