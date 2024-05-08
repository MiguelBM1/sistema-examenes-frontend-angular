import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatLine } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CategoriaService } from '../../../services/categoria.service';
import Swal from 'sweetalert2';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrls: ['./view-categorias.component.css'],
  standalone: true,
  imports: [MatCardModule, MatListModule, MatLine, MatDividerModule, MatButtonModule, MatIconModule, RouterLink]

})
export class ViewCategoriasComponent implements OnInit{

  categorias:any = [

  ]

  categoriaService = inject(CategoriaService);


  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (dato:any)=>{
        this.categorias = dato;
      console.log(this.categorias);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar las categorias', 'error');
      }
    )
  }

}
