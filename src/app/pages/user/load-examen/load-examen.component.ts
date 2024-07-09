import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from '../../../services/examen.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-load-examen',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './load-examen.component.html',
  styleUrl: './load-examen.component.css'
})
export class LoadExamenComponent  implements OnInit{

  catId: any;
  examenes: any;

  private readonly __route = inject(ActivatedRoute);
  private readonly __examenService = inject(ExamenService);

  ngOnInit(): void {
    this.catId = this.__route.snapshot.params['catId'];
    if(this.catId==0){
      console.log('No se ha seleccionado ninguna categoria');
      this.__examenService.listarCuestionarios().subscribe(
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
    }
  }
}
