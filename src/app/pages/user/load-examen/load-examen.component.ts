import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ExamenService } from '../../../services/examen.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-load-examen',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDivider, RouterLink],
  templateUrl: './load-examen.component.html',
  styleUrl: './load-examen.component.css'
})
export class LoadExamenComponent  implements OnInit{

  catId: any;
  examenes: any;

  private readonly __route = inject(ActivatedRoute);
  private readonly __examenService = inject(ExamenService);

  ngOnInit(): void {
    this.__route.params.subscribe((params) => {
      this.catId = params['catId'];
      if(this.catId==0){
        console.log('Cargando todas los examenes..');
        this.__examenService.obtenerExamenesActivos().subscribe(
          (data: any) => {
            this.examenes = data;
  
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
      }else{
        console.log('Categoria seleccionada: '+this.catId);
        this.__examenService.obtenerExamenesActivosPorCategoria(this.catId).subscribe(
          (data: any) => {
            this.examenes = data;
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
      }
  
     })
    }
}
