import { Component, OnInit, inject } from '@angular/core';
import { ExamenService } from '../../../services/examen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../../services/categoria.service';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-examen',
  templateUrl: './actualizar-examen.component.html',
  styleUrls: ['./actualizar-examen.component.css'],
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, MatOptionModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatSelectModule]
})
export class ActualizarExamenComponent implements OnInit {
  examenId = 0;
  examen: any;
  categorias: any;

  private readonly _examenService = inject(ExamenService);
  private readonly _categoriaService = inject(CategoriaService);
  private readonly _route = inject(ActivatedRoute);
  private readonly _router = inject(Router);

  ngOnInit() {
    this.examenId = this._route.snapshot.params['examenId'];
    this._examenService.obtenerExamen(this.examenId).subscribe(
      (examen) => {
        console.log(examen);
        this.examen = examen;
      },
      (error) => {
        console.log(error);
      }
    );

    this._categoriaService.listarCategorias().subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error) => {
        console.log('Error al cargar las categorias');
      }
    );
  }

  public actualizarDatos(examen: any) {
    this._examenService.actualizarExamen(examen).subscribe(
      (data) => {
        Swal.fire('Examen actualizado', 'Examen actualizado con exito', 'success')
          .then((e) => {
            this._router.navigate(['/admin/examenes']);
          }
          );
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error al actualizar el examen', 'error');
      }
    );
  }
}
