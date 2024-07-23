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
  imports: [MatCardModule, MatListModule, MatLine, MatDividerModule, MatButtonModule, MatIconModule, RouterLink, MatButtonModule]

})
export class ViewCategoriasComponent implements OnInit{

  categorias:any = [

  ]

  categoriaService = inject(CategoriaService);


  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias(){
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

  eliminarCategoria(id:any){
    Swal.fire({
      title: '¿Estas seguro de eliminar la categoria?',
      text: 'Una vez eliminada no se podra recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if(result.value){
        this.categoriaService.eliminarCategoria(id).subscribe(
          (dato:any)=>{
            Swal.fire('Exito !!', 'Categoria eliminada correctamente', 'success');
            this.listarCategorias();
          },
          (error)=>{
            console.log(error);
            Swal.fire('Error !!', 'Error al eliminar la categoria', 'error');
          }
        )
      }
    })
  
  }

}
