import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from '../../../services/examen.service';
import { MatCardModule } from '@angular/material/card';
import { MatDivider, MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-instrucciones',
  standalone: true,
  imports: [MatCardModule,MatDividerModule],
  templateUrl: './instrucciones.component.html',
  styleUrl: './instrucciones.component.css'
})
export class InstruccionesComponent {

  examenId:any;
  examen:any;

  private readonly __route = inject(ActivatedRoute);
  private readonly __examenService = inject(ExamenService);
  
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

}
